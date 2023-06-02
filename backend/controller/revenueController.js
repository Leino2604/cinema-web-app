const Revenue = require("../models/Revenue")


const revenueController = {
    // get Data Revenue
    getDataRevenue: (req,res) => {
        try {
            const month = req.query.month;
            const year = req.query.year;
            let start = '';
            let end = '';
            let query = {};

            if (month && year) {
                start = new Date(year, month - 1, 1).toISOString().slice(0, 10);
                end = new Date(year, month, 1).toISOString().slice(0, 10);
                query = {
                date: { $gt: start, $lte: end },
                };
            }
            Revenue.find(query)
                .then((revenues) => res.json(revenues))
                .catch((err) => {
                console.error(err);
                res.json({ error: err.message });
                });
        }catch(err) {
            return res.status(500).json(err)
        }
    },

    // localhost:5000/revenue?theater= &&month=1&&year=2002
    // Doanh thú bán vé tháng, bán đồ ăn tháng, tổng doanh thu tháng: OK : TEST: THÁNG1/2022:  3157350000, 300320000, 6160550000
    // Doanh thu bán vé ngày, bán thức ăn ngày, tổng doanh thu ngày: OK  TEST: THÁNG 01/01/2022: 104150000, 149350000, 24810000
    // Doanh thu của rạp theo tháng:   OK 
      //TEST: Cinema DN 1 : Food=28850000, Film= 91750000, Total= 120600000 ; 
            //Cinema HN 1: Food =  63500000, Film = 96900000, Total = 160400000
    // Doanh thu các phim, các món ăn, lượng bán ra,  theo tháng: OK
      // TEST: Black Panther: Wakanda Forever: 425450000 
             //Aquaman and the Lost Kingdom: 392250000 



    handleDataRevenue:  (req,res) => {
        try {
            const {
                year,
                month
              } = req.query;
              const start = new Date(year, month - 1, 1).toISOString().slice(0, 10);
              const end = new Date(year, month, 1).toISOString().slice(0, 10);
              // Xử lý doanh thu tháng (vé, thức ăn, tổng)
              const revenueMonthPipeline = [{
                  $match: {
                    date: {
                      $gt: start,
                      $lte: end
                    }
                  }
                },
                {
                  $unwind: "$theaters"
                },
                {
                  $facet: {
                    film: [{
                        $unwind: "$theaters.films"
                      },
                      {
                        $group: {
                          _id: null,
                          total_revenue_ticket: {
                            $sum: "$theaters.films.revenue"
                          },
                        },
                      },
                    ],
                    food: [{
                        $unwind: "$theaters.foods"
                      },
                      {
                        $group: {
                          _id: null,
                          total_revenue_food: {
                            $sum: "$theaters.foods.revenue"
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  $project: {
                    totalTicketRevenue: {
                      $arrayElemAt: ["$film.total_revenue_ticket", 0]
                    },
                    totalFoodRevenue: {
                      $arrayElemAt: ["$food.total_revenue_food", 0]
                    },
                    totalRevenue: {
                      $sum: [{
                          $arrayElemAt: ["$film.total_revenue_ticket", 0]
                        },
                        {
                          $arrayElemAt: ["$food.total_revenue_food", 0]
                        },
                      ],
                    },
                  },
                },
              ];
              // Xử lý doanh thu ngày (vé, thức ăn, tổng)
              const revenueDayPipeline = [{
                  $match: {
                    date: {
                      $gt: start,
                      $lte: end
                    }
                  }
                },
                {
                  $unwind: "$theaters"
                },
                {
                  $facet: {
                    // Xử lý tổng doanh thu vé ngày
                    film_daily_revenue: [{
                        $unwind: "$theaters.films"
                      },
                      {
                        $group: {
                          _id: {
                            date: "$date"
                          },
                          ticket_revenue: {
                            $sum: "$theaters.films.revenue"
                          }
                        }
                      },
                      {
                        $project: {
                          _id: 0,
                          date: "$_id.date",
                          ticket_revenue: "$ticket_revenue"
                        }
                      },
                      {
                        $sort: {
                          date: 1
                        }
                      },
                    ],
                    // Xử lý tổng doanh thu thức ăn ngày
                    food_daily_revenue: [{
                        $unwind: "$theaters.foods"
                      },
                      {
                        $group: {
                          _id: {
                            date: "$date"
                          },
                          food_revenue: {
                            $sum: "$theaters.foods.revenue"
                          }
                        }
                      },
                      {
                        $project: {
                          _id: 0,
                          date: "$_id.date",
                          food_revenue: "$food_revenue"
                        }
                      },
                      {
                        $sort: {
                          date: 1
                        }
                      },
                    ],
                  }
                },
                {
                  $unwind: "$film_daily_revenue"
                },
                {
                  $unwind: "$food_daily_revenue"
                },
                {
                  $group: {
                    _id: "$film_daily_revenue.date",
                    ticket_revenue: {
                      $first: "$film_daily_revenue.ticket_revenue"
                    },
                    food_revenue: {
                      $first: "$food_daily_revenue.food_revenue"
                    },
                  }
                },
                {
                  $project: {
                    _id: 0,
                    date: "$_id",
                    ticket_revenue: "$ticket_revenue",
                    food_revenue: "$food_revenue"
                  }
                },
                {
                  $addFields: {
                    total_revenue: {
                      $add: ["$ticket_revenue", "$food_revenue"]
                    }
                  }
                },
                {
                  $sort: {
                    date: 1
                  }
                },
              ];
              // Xử lý doanh thu các rạp theo tháng (vé, thức ăn, tổng)
              const revenueTheatersPipeline = [{
                  $match: {
                    date: {
                      $gt: start,
                      $lte: end
                    }
                  }
                },
                {
                  $unwind: "$theaters"
                },
                {
                  $facet: {
                    // Xử lý tổng doanh thu vé ngày
                    film_theater_revenue: [{
                        $unwind: "$theaters.films"
                      },
                      {
                        $group: {
                          _id: {
                            theater_name: "$theaters.name"
                          },
                          ticket_revenue: {
                            $sum: "$theaters.films.revenue"
                          },
                        }
                      },
                      {
                        $project: {
                          _id: 0,
                          theater_name: "$_id.theater_name",
                          ticket_revenue: "$ticket_revenue"
                        }
                      },
                      {
                        $sort: {
                          theater_name: 1
                        }
                      },
                    ],
                    // Xử lý tổng doanh thu thức ăn ngày
                    food_theater_revenue: [{
                        $unwind: "$theaters.foods",
                      },
                      {
                        $group: {
                          _id: {
                            theater_name: "$theaters.name"
                          },
                          food_revenue: {
                            $sum: "$theaters.foods.revenue"
                          },
                        },
                      },
                      {
                        $project: {
                          _id: 0,
                          theater_name: "$_id.theater_name",
                          food_revenue: "$food_revenue"
                        }
                      },
                      {
                        $sort: {
                          theater_name: 1
                        }
                      },
                    ],
                  }
                },
                {
                  $unwind: "$film_theater_revenue"
                },
                {
                  $unwind: "$food_theater_revenue"
                },
                {
                  $group: {
                    _id: "$film_theater_revenue.theater_name",
                    ticket_revenue: {
                      $first: "$film_theater_revenue.ticket_revenue"
                    },
                    food_revenue: {
                      $first: "$food_theater_revenue.food_revenue"
                    },
                  }
                },
                {
                  $project: {
                    _id: 0,
                    theater_name: "$_id",
                    ticket_revenue: "$ticket_revenue",
                    food_revenue: "$food_revenue"
                  }
                },
                {
                  $addFields: {
                    total_revenue: {
                      $add: ["$ticket_revenue", "$food_revenue"]
                    }
                  }
                },
                {
                  $sort: {
                    total_revenue: -1
                  }
                },
              ]
            
              // Xử lý doanh thu các bộ phim, các món ăn theo tháng, lượng bán ra
              const revenueFilmFoodPipeline = [{
                $match: {
                  date: { $gt: start, $lte: end },
                },
              },
              {
                $unwind: "$theaters",
              },
              {
                $facet: {
                  // Xử lý tổng doanh thu vé ngày
                  film_revenue: [
                    {
                      $unwind: "$theaters.films",
                    },
                    {
                      $group: {
                        _id: {
                          name: "$theaters.films.name",
                        },
                        total_revenue: { $sum: "$theaters.films.revenue" },
                        total_sold: { $sum: "$theaters.films.tickets_sold" },
                      },
                    },
                    {
                      $project: {
                        _id: 0,
                        name: "$_id.name",
                        total_revenue: "$total_revenue",
                        total_sold: "$total_sold"
                      },
                    },
                    {
                      $sort: {
                        total_revenue: -1,
                      },
                    },
                  ],
                  // Xử lý tổng doanh thu thức ăn ngày
                  food_revenue: [
                    {
                      $unwind: "$theaters.foods",
                    },
                    {
                      $group: {
                        _id: {
                          name: "$theaters.foods.name",
                        },
                        total_revenue: { $sum: "$theaters.foods.revenue" },
                        total_sold: { $sum: "$theaters.foods.quantity_sold" },
                      },
                    },
                    {
                      $project: {
                        _id: 0,
                        name: "$_id.name",
                        total_revenue: "$total_revenue",
                        total_sold: "$total_sold"
                      },
                    },
                    {
                      $sort: {
                        total_revenue: -1,
                      },
                    },
                  ],
                },
              },]
            
              Promise.all([
                  Revenue.aggregate(revenueMonthPipeline),
                  Revenue.aggregate(revenueDayPipeline),
                  Revenue.aggregate(revenueTheatersPipeline),
                  Revenue.aggregate(revenueFilmFoodPipeline),
                ])
                .then(([revenueMonthResult, revenueDayResult, revenueMonthTheatersResult, revenueFilmFoodPipeline]) =>
                  res.json({
                    MonthTicketRevenue: revenueMonthResult[0].totalTicketRevenue,
                    MonthFoodRevenue: revenueMonthResult[0].totalFoodRevenue,
                    totalMonthRevenue: revenueMonthResult[0].totalRevenue,
                    DayRevenue: revenueDayResult,
                    MonthTheatersRevenue: revenueMonthTheatersResult,
                    MonthRevenueFilms: revenueFilmFoodPipeline[0].film_revenue,
                    MonthRevenueFoods: revenueFilmFoodPipeline[0].food_revenue,
            
                  })
                )
                .catch((err) => {
                  console.error(err);
                  res.json({
                    error: err.message
                  });
                });
        }catch(err) {
            return res.status(500).json(err)
        }
    }
}

module.exports = revenueController;