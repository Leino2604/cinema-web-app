import React, { useState, useEffect } from 'react';
import styles from './Revenue.module.scss';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import moment from "moment";
import { Table, Button, Modal } from 'react-bootstrap';
import { saveAs } from 'file-saver';

Chart.register(...registerables);


// Vẽ biểu đồ cột 4 món ăn có doanh thu cao nhất
function ChartRevenueTop(props) {
  const type = props.type;
  const labels =  props.data.map(item => item.name);
  const data = props.data.map(item => item.total_revenue);
  const dataChart = {
    labels: labels,
    datasets: [
      {
        label: 'Biểu đồ top 4 doanh thu',
        backgroundColor: (type === 'food') ?  '#20b02b': 'blue',
        borderColor: '#2196f3',
        borderWidth: 1,
        data: data,
      },
    ],
  };

  return <Bar data={dataChart} />;
}

const Revenue = () => {
  // Lưu trữ doanh thu tháng cần xem
  const [revenues, setRevenues] = useState({
    "MonthTicketRevenue": 0,
    "MonthFoodRevenue": 0,
    "totalMonthRevenue": 0,
    "DayRevenue": [],
    "MonthTheatersRevenue": [],
    "MonthRevenueFilms": [],
    "MonthRevenueFoods": [],
  });

  // Use state chứa doanh thu bán vé của tháng
  const [monthRevenueTicket, setMonthRevenueTicket] = useState(0);
  
  // Use state chưa tổng doanh thu bán món ăn tháng
  const [monthRevenueFood, setMonthRevenueFood] = useState(0);

  // Use state chưa tổng doanh thu các rạp tháng
  const [monthRevenueTheater, setMonthRevenueTheater] = useState([]);
  
  // Use state chưa thông tin về tháng đang chon
  const [month, setMonth] = useState(moment().format("MM"));
  // Chứa thông tin vế select của option month
  const [selectedMonth, setSelectedMonth] = useState(moment().format("MM"));

  // Use state chưa thông tin về doanh thu của các bộ phim, món ăn theo tháng
  const [monthRevenueFilms, setMonthRevenueFilms] = useState([]);
  const [monthRevenueFoods, setMonthRevenueFoods] = useState([]);


  // Use state chưa thông tin về năm đang chọn
  const [year, setYear] = useState(moment().format("YYYY"));
  // Chứa thông tin vế select của option year
  const [selectedYear, setSelectedYear] = useState(moment().format("YYYY"));
  

  // Lấy dữ liệu revenue tại API theo month,year chọn
  const fetchRevenues = async (month, year) => {
    
    const url = `http://localhost:5000/revenue?month=${month}&year=${year}`;
    const response = await fetch(url);

    // Lấy dữ liệu doanh thu ứng với month và year
    const data = await response.json();
    setRevenues(data);
    setMonthRevenueTicket(data.MonthTicketRevenue)
    setMonthRevenueFood(data.MonthFoodRevenue)
    setMonthRevenueTheater(data.MonthTheatersRevenue)
    setMonthRevenueFilms(data.MonthRevenueFilms)
    setMonthRevenueFoods(data.MonthRevenueFoods)
  };

  // Câp nhật giá trị ban đầu
  useEffect(() => {
    fetchRevenues(month, year);
  }, [month, year]);

  // Xử lý chọn dropdơn để xem ngày tháng khác
  const handleSelectMonthYear = () => {
    console.log(selectedMonth, selectedYear);
    fetchRevenues(selectedMonth,selectedYear );
    setMonth(selectedMonth);
    setYear(selectedYear);
  }

  // Dữ liệu cho vẽ biều đồ đường doanh thu từng ngày của tháng
  const dataChartRenevue = {
    labels: revenues.DayRevenue.map((revenue) => revenue.date.slice(0,10)),
    datasets: [
      {
        // Cập nhật label theo biến month: sau khi nhấn nút "Xác nhận"
        label: `Doanh thu tháng ${month}`,
        data: revenues.DayRevenue.map((revenue) => revenue.total_revenue) ,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
 
 
  // Hàm hiển thị bảng doanh thu món ăn, vé và biểu đồ của nó, mặc định hiển thị top4, bấm vào top 6, chi tiết top 8 :v
  function TableandChart(dataShort, dataDetail, str_, dataFull) {
    // Modal movie
    const [showModalMovie, setShowModalMovie] = useState(false);

    // Modal food
    const [showModalFood, setShowModalFood] = useState(false);
    const [showReport, setShowReport] = useState(false);
  
    // Xử lý show Modal
    const handleShowModal = () => {
      if (str_ === "Movie") {
        setShowModalMovie(true);
      } else if (str_ === "food") {
        setShowModalFood(true);
      }
    };
    
    // Xử lý đóng modal
    const handleCloseModal = () => {
      setShowModalMovie(false);
      setShowModalFood(false);
      setShowReport(false);
    };
    
    // Xử lý xuất báo cáo doanh thu 
    const handleDownloadReport = () => {
      const csvData = [
        ['ID', 'Name', 'Sold', 'Revenue'],
        ...dataFull.map((data, index) => [index + 1, data.name, data.total_sold, data.total_revenue]),
      ];
      const csvContent = csvData.map(row => row.join(',')).join('\n');
      const blob = new Blob(["\ufeff", csvContent], { type: 'text/csv;charset=utf-8' });
      if(str_ === "food") {
        saveAs(blob, `Doanh thu bán đồ ăn tháng ${month}.csv`);
      } else if(str_ === "Movie") {
        saveAs(blob, `Doanh thu bán vé tháng ${month}.csv`);
      }
    };


  
    return (
      <div className = {styles.tableChart}>
        <div style={{ width: "40%" }}>
          {/* Bảng TOP5 */}
          <Table>
            <thead>    
                 <tr>
                   <th>ID</th>
                   <th>Tên</th>
                   <th>Lượng bán ra</th>
                   <th>Doanh thu</th>
                 </tr>
               </thead>
               <tbody>
                 {dataShort.map((data,index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.name}</td>
                    <td>{data.total_sold.toLocaleString()}</td>
                    <td>{data.total_revenue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
          </Table>
          {/* Nút chi tiết để xem chi rõ hơn */}
          <Button variant="primary" onClick={handleShowModal}>
            Xem chi tiết
          </Button>
          <Modal show={str_ === "Movie" ? showModalMovie : showModalFood} onHide={handleCloseModal}>
            {/* Modal food và ticket */}
            <Modal.Header closeButton>
                 <Modal.Title>
                   Doanh thu bán {(str_ === "food") ? "đồ ăn" : "vé"} tháng {month}
                   {/* {str_ == "food"} ? "Doanh thu bán đồ ăn của rạp tháng {month}" :   */}
                 </Modal.Title>
               </Modal.Header>
               <Modal.Body className = {styles.revenueDetail}>
                 {showReport ? (
                  <Table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tên phim</th>
                        <th>Lượng vé bán ra</th>
                        <th>Doanh thu</th>
                      </tr>
                    </thead>
                    <tbody >
                      {dataFull.map((data,index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.total_sold.toLocaleString()}</td>
                          <td>{data.total_revenue.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <Table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tên phim</th>
                        <th>Lượng vé bán ra</th>
                        <th>Doanh thu</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataDetail.map((data,index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.total_sold.toLocaleString()}</td>
                          <td>{data.total_revenue.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Modal.Body>
              <Modal.Footer>
                {showReport ? (
                  <Button variant="primary" onClick={handleDownloadReport}>
                    Tải báo cáo
                  </Button>
                ) : (
                  <Button variant="secondary" onClick={() => setShowReport(true)}>
                    Xem toàn bộ
                  </Button>
                )}
              </Modal.Footer>
          </Modal>
        </div>
        <div className={styles.top}>
          <div className={styles.chart}>
            <ChartRevenueTop data = {dataShort} type = { str_}/>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className = {styles.container}>
        <div className = {styles.headerReve}>
            <div className = {styles.title}>Doanh thu</div>
            <div className = {styles.selectTime}>
              <label className = {styles.titleSelect}>Chọn tháng </label>
              {/* Dropdown chọn tháng */}
              <select className = {styles.optionMonth} value = {selectedMonth} onChange={(e)=>setSelectedMonth(e.target.value)}>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3 </option>
                <option value="04">4 </option>
                <option value="05">5 </option>
                <option value="06">6 </option>
                <option value="07">7 </option>
                <option value="08">8 </option>
                <option value="09">9 </option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>

              <label className = {styles.titleSelect}>Chọn năm </label>
              {/* Dropdown chọn tháng */}
              <select className = {styles.optionMonth} value = {selectedYear} onChange={(e)=> setSelectedYear(e.target.value)}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
            {console.log(month, year)}
            <Button onClick ={handleSelectMonthYear}>Xác nhận</Button>
        </div>
        
        {/* Tổng doanh thu, doanh thu vé, doanh thu thức ăn*/}
        <div className = {styles.blockRevenue}>
            <div className = {styles.revenueItem}>
                <div className = {styles.name}>Tổng doanh thu</div>
                <div className = {styles.value}>{(monthRevenueTicket + monthRevenueFood).toLocaleString()}</div>
            </div>
            <div className = {styles.revenueItem}>
                <div className = {styles.name}>Doanh thu vé</div>
                <div className = {styles.value}>{monthRevenueTicket.toLocaleString()}</div>
                {/* <a style = {{color: "blue"}} href = "./revenue-ticket">Xem chi tiết</a> */}
            </div>
            <div className = {styles.revenueItem}>
                <div className = {styles.name}>Doanh thu thức ăn</div>
                <div className = {styles.value}>{monthRevenueFood.toLocaleString()}</div>
                {/* <a style = {{color: "blue"}} href = "./revenue-ticket">Xem chi tiết</a> */}
            </div>
        </div>

        <div className = {styles.revenueTotal}>
           {/* Đồ thì đường doanh thu theo tháng */}
            <div className = {styles.chart}>
                <Line data={dataChartRenevue} options={{ maintainAspectRatio: false }}/>
            </div>

            {/* Doanh thu các rạp theo tháng, dự định làm thêm ô search ở đây */}
            <div className = {styles.revenueTheater}>
                <div className = {styles.title}>Doanh thu các rạp trong tháng {month}</div>
                <ol className = {styles.group} start = {1}>
                 {monthRevenueTheater.map((rtheatre, index) => (
                     <li key = {index} className = {styles.item}>
                          <span className = {styles.attr}>{rtheatre.theater_name} :   </span>
                          <span className = {styles.valueSale}>{rtheatre.total_revenue.toLocaleString()} Đ</span>
                      </li>
                 ) )}
                </ol>
            </div>
        </div>
      
        <div>
           <div className = {styles.tableChartContainer}>
               <h1 style = {{textAlign: "center"}}>Top 4 bộ phim doanh thu cao nhất tháng {month}</h1>
               {TableandChart(monthRevenueFilms.slice(0,4), monthRevenueFilms.slice(0,6), "Movie", monthRevenueFilms )}
           </div>

           <div className = {styles.tableChartContainer}>
               <h1 style = {{textAlign: "center"}}>Top 4 món ăn doanh thu cao nhất tháng {month}</h1>
              {TableandChart(monthRevenueFoods.slice(0,4), monthRevenueFoods.slice(0,6), "food", monthRevenueFoods )}
            </div>  
          
        </div>

    </div>
  );
};

export default Revenue;
