import React, { useState } from 'react';
import styles from './Revenue.module.scss';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import moment from "moment";
import { Table, Button, Modal } from 'react-bootstrap';
import { saveAs } from 'file-saver';
Chart.register(...registerables);

// Tạo giả dữ liệu để test doanh thu tháng
// Tổng doanh thu 30 ngày đang khác với tổng doanh thu vé + món ăn 
// Doanh thu tháng 1
const revenueJanuary = [
  { ngay: '2023-01-01', revenue: 1000.1 },
  { ngay: '2023-01-02', revenue: 1500 },
  { ngay: '2023-01-03', revenue: 2000 },
  { ngay: '2023-01-04', revenue: 1000 },
  { ngay: '2023-01-05', revenue: 1500 },
  { ngay: '2023-01-06', revenue: 2000 },
  { ngay: '2023-01-07', revenue: 1000 },
  { ngay: '2023-01-08', revenue: 1500 },
  { ngay: '2023-01-09', revenue: 2000 },
  { ngay: '2023-01-10', revenue: 1000 },
  { ngay: '2023-01-11', revenue: 1500 },
  { ngay: '2023-01-12', revenue: 2000 },
  { ngay: '2023-01-13', revenue: 1000 },
  { ngay: '2023-01-14', revenue: 1500 },
  { ngay: '2023-01-15', revenue: 2000 },
  { ngay: '2023-01-16', revenue: 1000 },
  { ngay: '2023-01-17', revenue: 1500 },
  { ngay: '2023-01-18', revenue: 2000 },
  { ngay: '2023-01-19', revenue: 1000 },
  { ngay: '2023-01-20', revenue: 1500 },
  { ngay: '2023-01-21', revenue: 2000 },
  { ngay: '2023-01-22', revenue: 1000 },
  { ngay: '2023-01-23', revenue: 1500 },
  { ngay: '2023-01-24', revenue: 2000 },
  { ngay: '2023-01-25', revenue: 3000 },
  { ngay: '2023-01-26', revenue: 3500 },
  { ngay: '2023-01-27', revenue: 1000 },
  { ngay: '2023-01-28', revenue: 1500 },
  { ngay: '2023-01-29', revenue: 2000 },
  { ngay: '2023-01-30', revenue: 2500 },
  { ngay: '2023-01-21', revenue: 2600},
];

//Doanh thu tháng 2
const revenueFebruary = [
  { ngay: '2023-02-01', revenue: 1000 },
  { ngay: '2023-02-02', revenue: 1500 },
  { ngay: '2023-02-03', revenue: 2000 },
  { ngay: '2023-02-04', revenue: 1000 },
  { ngay: '2023-02-05', revenue: 1500 },
  { ngay: '2023-02-06', revenue: 2000 },
  { ngay: '2023-02-07', revenue: 1000 },
  { ngay: '2023-02-08', revenue: 1500 },
  { ngay: '2023-02-09', revenue: 2000 },
  { ngay: '2023-02-10', revenue: 1000 },
  { ngay: '2023-02-11', revenue: 1500 },
  { ngay: '2023-02-12', revenue: 2000 },
  { ngay: '2023-02-13', revenue: 1000 },
  { ngay: '2023-02-14', revenue: 1500 },
  { ngay: '2023-02-15', revenue: 5000 },
  { ngay: '2023-02-16', revenue: 1000 },
  { ngay: '2023-02-17', revenue: 1500 },
  { ngay: '2023-02-18', revenue: 5000 },
  { ngay: '2023-02-19', revenue: 2000 },
  { ngay: '2023-02-20', revenue: 1500 },
  { ngay: '2023-02-21', revenue: 3000 },
  { ngay: '2023-02-22', revenue: 4000 },
  { ngay: '2023-02-23', revenue: 4500 },
  { ngay: '2023-02-24', revenue: 4000 },
  { ngay: '2023-02-25', revenue: 6000 },
  { ngay: '2023-02-26', revenue: 1000 },
  { ngay: '2023-02-27', revenue: 2000 },
  { ngay: '2023-02-28', revenue: 4000 },
];

//Doanh thu tháng 3
const revenueMarch = [
  { ngay: '2023-03-01', revenue: 1000 },
  { ngay: '2023-03-02', revenue: 1500 },
  { ngay: '2023-03-03', revenue: 5000 },
  { ngay: '2023-03-04', revenue: 5000 },
  { ngay: '2023-03-05', revenue: 5500 },
  { ngay: '2023-03-06', revenue: 5000 },
  { ngay: '2023-03-07', revenue: 5000 },
  { ngay: '2023-03-08', revenue: 5500 },
  { ngay: '2023-03-09', revenue: 5000 },
  { ngay: '2023-03-10', revenue: 5000 },
  { ngay: '2023-03-11', revenue: 5500 },
  { ngay: '2023-03-12', revenue: 5000 },
  { ngay: '2023-03-13', revenue: 5000 },
  { ngay: '2023-03-14', revenue: 5500 },
  { ngay: '2023-03-15', revenue: 5000 },
  { ngay: '2023-03-16', revenue: 5000 },
  { ngay: '2023-03-17', revenue: 5500 },
  { ngay: '2023-03-18', revenue: 9000 },
  { ngay: '2023-03-19', revenue: 5000 },
  { ngay: '2023-03-20', revenue: 4500 },
  { ngay: '2023-03-21', revenue: 1000 },
  { ngay: '2023-03-22', revenue: 1000 },
  { ngay: '2023-03-23', revenue: 1500 },
  { ngay: '2023-03-24', revenue: 3000 },
  { ngay: '2023-03-25', revenue: 1000 },
  { ngay: '2023-03-26', revenue: 4000 },
  { ngay: '2023-03-27', revenue: 1000 },
  { ngay: '2023-03-28', revenue: 2000 },
  { ngay: '2023-03-29', revenue: 3000 },
  { ngay: '2023-03-30', revenue: 600 },
  { ngay: '2023-03-31', revenue: 4000 },
];

//Doanh thu tháng 5
const revenueMay = [
  { ngay: '2023-05-01', revenue: 1000 },
  { ngay: '2023-05-02', revenue: 1500 },
  { ngay: '2023-05-03', revenue: 4010 },
  { ngay: '2023-05-04', revenue: 4010 },
  { ngay: '2023-05-05', revenue: 4510 },
  { ngay: '2023-05-06', revenue: 4010 },
  { ngay: '2023-05-07', revenue: 4010 },
  { ngay: '2023-05-08', revenue: 4510 },
  { ngay: '2023-05-09', revenue: 4010 },
  { ngay: '2023-05-10', revenue: 4010 },
  { ngay: '2023-05-11', revenue: 4510 },
  { ngay: '2023-05-12', revenue: 4010 },
  { ngay: '2023-05-13', revenue: 4010 },
  { ngay: '2023-05-14', revenue: 4510 },
  { ngay: '2023-05-15', revenue: 4010 },
  { ngay: '2023-05-16', revenue: 4010 },
  { ngay: '2023-05-17', revenue: 5510 },
  { ngay: '2023-05-18', revenue: 1010 },
  { ngay: '2023-05-19', revenue: 1010 },
  { ngay: '2023-05-20', revenue: 10510 },
  { ngay: '2023-05-21', revenue: 2010 },
  { ngay: '2023-05-22', revenue: 5010 },
  { ngay: '2023-05-23', revenue: 1510 },
  { ngay: '2023-05-24', revenue: 4010 },
  { ngay: '2023-05-25', revenue: 4010 },
  { ngay: '2023-05-26', revenue: 5010 },
  { ngay: '2023-05-27', revenue: 1010 },
  { ngay: '2023-05-28', revenue: 1010 },
  { ngay: '2023-05-29', revenue: 1010 },
  { ngay: '2023-05-30', revenue: 2010 },
  { ngay: '2023-05-31', revenue: 6010 },
];

// Danh sách các bộ phim trong tháng: id, name, vé bán, doanh thu
const moviesMonth = [
  { id: 1, name: 'Lật mật 1', Solds: 1000000, revenue: 1900000000 },
  { id: 2, name: 'Lật mật 2', Solds: 900000, revenue: 2000000000 },
  { id: 3, name: 'Lật mật 3', Solds: 800000, revenue: 2100000000 },
  { id: 4, name: 'Lật mật 4', Solds: 700000, revenue: 1600000000 },
  { id: 5, name: 'Lật mật 5', Solds: 600000, revenue: 1400000000 },
  { id: 6, name: 'Lật mật 6', Solds: 500000, revenue: 1100000000 },
  { id: 7, name: 'Lật mật 7', Solds: 500000, revenue: 1000000000 },
  { id: 8, name: 'Lật mật 8', Solds: 400000, revenue: 800000000 },
  { id: 9, name: 'Lật mật 9', Solds: 400000, revenue: 1200000000 },
  { id: 10, name: 'Lật mật 10', Solds: 400000, revenue: 1100000000 },
  { id: 11, name: 'Lật mật 11', Solds: 300000, revenue: 1000000000 },
  { id: 12, name: 'Lật mật 12', Solds: 300000, revenue: 90000000 },
  { id: 13, name: 'Lật mật 13', Solds: 300000, revenue: 800000000 },
  { id: 14, name: 'Lật mật 14', Solds: 200000, revenue: 700000000 },
  { id: 15, name: 'Lật mật 15', Solds: 100000, revenue: 400000000 },
];

// Sắp sếp phim theo thứ tự doanh thu giảm dần
const movies = moviesMonth.sort((a, b) => b.revenue - a.revenue)

// Danh sách các món ăn trong tháng: id, name, doanh thu
const foodsMonth = [
  { id: 1, name: 'Bỏng ngô 1', Solds: 1000, revenue: 150000000 },
  { id: 2, name: 'Bỏng ngô 2', Solds: 1100, revenue: 18000000 },
  { id: 3, name: 'Bỏng ngô 3', Solds: 1800, revenue: 17000000 },
  { id: 4, name: 'Bỏng ngô 4', Solds: 2000, revenue: 16000000},
  { id: 5, name: 'Bỏng ngô 5', Solds: 1100, revenue: 1000000 },
  { id: 6, name: 'Bỏng ngô 6', Solds: 1900, revenue: 20000000 },
  { id: 7, name: 'Bỏng ngô 7', Solds: 2200, revenue: 70000000 },
  { id: 8, name: 'Bỏng ngô 8', Solds:  800, revenue: 50000000 },
  { id: 9, name: 'Bỏng ngô 9', Solds: 700, revenue: 40000000 },
  { id: 10, name: 'Bỏng ngô 10', Solds: 400, revenue: 90000000 },
  { id: 11, name: 'Bỏng ngô 11', Solds: 600, revenue: 10000000 },
  { id: 12, name: 'Bỏng ngô 12', Solds: 1100, revenue: 10000000 },
  { id: 13, name: 'Bỏng ngô 13',  Solds: 1900, revenue: 80000000},
  { id: 14, name: 'Bỏng ngô 14', Solds: 1100, revenue: 15000000 },
  { id: 15, name: 'Bỏng ngô 15', Solds: 1100, revenue: 14000000 },
];

// Sắp sếp món ăn theo thứ tự doanh thu giảm dần
const foods = foodsMonth.sort((a, b) => b.revenue - a.revenue)

// Vẽ biểu đồ cột 5 bộ phim có doanh thu cao nhất
function TopMovie() {
  const top5Movies = movies.slice(0, 5);
  const labels = top5Movies.map(movie => movie.name);
  const data = top5Movies.map(movie => movie.revenue);
  const dataChart = {
    labels: labels,
    datasets: [
      {
        label: 'Doanh thu bán vé',
        backgroundColor: '#d9e218',
        borderColor: '#2196f3',
        borderWidth: 1,
        data: data,
      },
    ],
  };

  return <Bar data={dataChart} />;
}

// Vẽ biểu đồ cột 5 món ăn có doanh thu cao nhất
function TopFood() {
  const top5Foods = foods.slice(0, 5);
  const labels = top5Foods.map(food => food.name);
  const data = top5Foods.map(food => food.revenue);
  const dataChart = {
    labels: labels,
    datasets: [
      {
        label: 'Doanh thu bán đồ ăn',
        backgroundColor: '#20b02b',
        borderColor: '#2196f3',
        borderWidth: 1,
        data: data,
      },
    ],
  };

  return <Bar data={dataChart} />;
}
// doanh thu rạp theo tháng
const revenueTheatreMonth = [
  { id: 1, name: 'CGV HCM1', revenue: 11000000 },
  { id: 2, name: 'CGV HCM2', revenue: 12000000 },
  { id: 3, name: 'CGV HN1', revenue: 17000000 },
  { id: 4, name: 'CGV HN2', revenue: 15000000},
  { id: 5, name: 'CGV DN1', revenue: 2200000 },
  { id: 6, name: 'CGV DN2', revenue: 21000000 },
  { id: 7, name: 'CGV HCM3', revenue: 20000000 },
  { id: 8, name: 'CGV HCM4', revenue: 10000000 },
  { id: 9, name: 'CGV HCM5', revenue: 50000000 },
  { id: 10, name: 'CGV HCM6', revenue: 90000000 },
  { id: 11, name: 'CGV HN3', revenue: 10000000 },
  { id: 12, name: 'CGV HN4', revenue: 10000000 },
  { id: 13, name: 'CGV HN5',  revenue: 80000000},
  { id: 14, name: 'CGV HN6', revenue: 15000000 },
  { id: 15, name: 'CGV HN7', revenue: 14000000 },
];
// Lấy top 10 doanh thu rạp cao nhất tháng
const revenueTheatre = revenueTheatreMonth.sort((a, b) => b.revenue - a.revenue).slice(0,10)

const Revenue = () => {
  // Lây tháng hiện tại
  const currentMonth = moment().month() + 1

  // Set tháng
  const [month, setMonth] = useState(currentMonth);

  // Khởi tạo doanh thu
  let initialRevenue = [];
  if (currentMonth === 1) {
    initialRevenue = revenueJanuary;
  } else if (currentMonth === 2) {
    initialRevenue = revenueFebruary;
  } else if (currentMonth === 3) {
    initialRevenue = revenueMarch;
  } else if (currentMonth === 5) {
    initialRevenue = revenueMay;
  }

  // Khởi tạo doanh thu hiển thị lúc đầu
  const [revenue, setRevenue] = useState(initialRevenue);

  // Tổng doanh thu vé
  const totalRevenueTicket = moviesMonth.reduce((prev, current) => prev + current.revenue, 0);

  // Tổng doanh thu món ăn
  const totalRevenueFoods = foodsMonth.reduce((prev, current) => prev + current.revenue, 0);

  // Tổng doanh thu tháng: Dữ liệu chỉ lấy test nên chưa bằng food + ticket sales
  const totalRevenueMonth = revenue.reduce((prev, current) => prev + current.revenue, 0);
  
  // const totalRevenue = revenue.reduce((prev, current) => prev + current.revenue, 0).toLocaleString();
  const [selectedMonth, setSelectedMonth] = useState(
    moment().format("YYYY-MM")
);
  
  // Dữ liệu cho vẽ biều đồ đường doanh thu từng ngày của tháng
  const dataChartRenevue = {
    labels: revenue.map((item) => item.ngay),
    datasets: [
      {
        label: `Doanh thu tháng ${month}`,
        data: revenue.map((item) => item.revenue),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  
  //  Hàm xử lý khi nhấn nút "XEM CHI TIẾT" doanh thu film
  const [showReport, setShowReport] = useState(false);
  
  // Xử lý sự kiện khi chọn tháng
  const handleChangeMonth = (event) => {
    const selectedMonth = event.target.value;
    if(selectedMonth === "2023-01") {
      setRevenue(revenueJanuary)
      setMonth(1)
    }else if(selectedMonth === "2023-02") {
      setRevenue(revenueFebruary)
      setMonth(2)
    }else if(selectedMonth === "2023-03") {
      setRevenue(revenueMarch)
      setMonth(3)
    } else if(selectedMonth === "2023-05") {
      setRevenue(revenueMay)
      setMonth(5)
    } 
    setSelectedMonth(selectedMonth);
  };    

  // Chưa bấm -> hiện 5, bấm -> hiện 10, toàn bộ -> hiện all
  const displayedMovies5 = movies.slice(0, 5);
  const displayedMovies10 = movies.slice(0, 10);
  const displayedFoods5 = foods.slice(0, 5);
  const displayedFoods10 = foods.slice(0, 10);

  // Hàm hiển thị bảng doanh thu món ăn, vé và biểu đồ của nó
  function TableandChart(data5, data10, str_, datas) {
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
        ...datas.map((data) => [data.id, data.name, data.Solds, data.revenue]),
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
        <div style={{ width: "50%" }}>
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
                 {data5.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.Solds}</td>
                    <td>{item.revenue}</td>
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
                      {datas.map((data) => (
                        <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.Solds}</td>
                          <td>{data.revenue}</td>
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
                      {data10.map((movie) => (
                        <tr key={movie.id}>
                          <td>{movie.id}</td>
                          <td>{movie.name}</td>
                          <td>{movie.Solds}</td>
                          <td>{movie.revenue}</td>
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
            {str_ === "food" ? <TopFood/> : <TopMovie/>}
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
              <div className = {styles.titleSelect}>Chọn thời gian </div>
              {/* Dropdown chọn tháng */}
              <select className = {styles.optionMonth} value={selectedMonth} onChange={handleChangeMonth}>
                <option value="2023-01">Tháng 1 2023</option>
                <option value="2023-02">Tháng 2 2023</option>
                <option value="2023-03">Tháng 3 2023</option>
                <option value="2023-04">Tháng 4 2023</option>
                <option value="2023-05">Tháng 5 2023</option>
                <option value="2023-06">Tháng 6 2023</option>
                <option value="2023-07">Tháng 7 2023</option>
                <option value="2023-08">Tháng 8 2023</option>
                <option value="2023-09">Tháng 9 2023</option>
                <option value="2023-10">Tháng 10 2023</option>
                <option value="2023-11">Tháng 11 2023</option>
                <option value="2023-12">Tháng 12 2023</option>
              </select>
            </div>
        </div>
        
        {/* Tổng doanh thu, doanh thu vé, doanh thu thức ăn*/}
        <div className = {styles.blockRevenue}>
            <div className = {styles.revenueItem}>
                <div className = {styles.name}>Tổng doanh thu</div>
                <div className = {styles.value}>{totalRevenueMonth.toLocaleString()}</div>
            </div>
            <div className = {styles.revenueItem}>
                <div className = {styles.name}>Doanh thu vé</div>
                <div className = {styles.value}>{totalRevenueTicket.toLocaleString()}</div>
                {/* <a style = {{color: "blue"}} href = "./revenue-ticket">Xem chi tiết</a> */}
            </div>
            <div className = {styles.revenueItem}>
                <div className = {styles.name}>Doanh thu thức ăn</div>
                <div className = {styles.value}>{totalRevenueFoods.toLocaleString()}</div>
                {/* <a style = {{color: "blue"}} href = "./revenue-ticket">Xem chi tiết</a> */}
            </div>
        </div>

        <div className = {styles.revenueTotal}>
           {/* Đồ thì đường doanh thu theo tháng */}
            <div className = {styles.chart}>
                <Line data={dataChartRenevue} options={{ maintainAspectRatio: false }}/>
            </div>

            {/* Top doanh thu rạp theo tháng */}
            <div className = {styles.trending}>
                <div className = {styles.title}>Top doanh thu rạp tháng {month}</div>
                <ol className = {styles.group} start = {1}>
                 {revenueTheatre.map((rtheatre, index) => (
                     <li key = {index} className = {styles.item}>
                          <span className = {styles.attr}>{rtheatre.name} :   </span>
                          <span className = {styles.valueSale}>{rtheatre.revenue} Đ</span>
                      </li>
                 ) )}
                </ol>
            </div>
        </div>
      
        <div>
           <div className = {styles.tableChartContainer}>
               <h1 style = {{textAlign: "center"}}>Top 5 bộ phim doanh thu cao nhất tháng</h1>
               {TableandChart(displayedMovies5, displayedMovies10, "Movie", movies )}
           </div>

           <div className = {styles.tableChartContainer}>
               <h1 style = {{textAlign: "center"}}>Top 5 món ăn doanh thu cao nhất tháng</h1>
              {TableandChart(displayedFoods5, displayedFoods10, "food", foods )}
            </div>  
          
        </div>

    </div>
  );
};

export default Revenue;
