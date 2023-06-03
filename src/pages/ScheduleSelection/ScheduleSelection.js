import React, {useState} from 'react';
import styles from './ScheduleSelection.module.scss'
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch  } from "react-icons/ai";
import {GrLocation} from "react-icons/gr"
import images from '../../assets/images'
import { Link } from "react-router-dom";

function Movie(name, price, time, out ){
  let [activeTime, setActiveTime] = useState(null);
  const timeButtons = time.map(t => (
    <button 
      key={t} 
      className={`${styles.timeElement} ${out.includes(t) ? styles.disabled : ''} ${activeTime === t ? styles.active : ''}`} 
      disabled={out.includes(t)}
      onClick={() => setActiveTime(activeTime === t ? null : t)}
    >
      {t}
    </button>
  ));

  return (
    <div className={styles.typeMovie}>
      <div className={styles.type}>
        <div className={styles.nameType}>{name}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div className={styles.timeMovie}>
        {timeButtons}
      </div>
    </div>
  );
}




function ScheduleSelection() {
  const day = ['Sun', 'Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat'];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dates, setDates] = useState(getDates());


  // Hàm tính toán danh sách ngày
  function getDates() {
    let dates = [];
    for (let i = -2; i <= 2; i++) {
      let date = new Date();
      date.setTime(currentDate.getTime() + (24 * 3600 * 1000 * i));
      dates.push(date);
    }
    return dates;
  }
  // Hàm xử lý khi bấm nút qua phải
  function handleNext() {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));
    setDates(getDates());
  }

  function handlePrev() {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
    setDates(getDates());
  }

  
  return (
    <div className = {styles.container}>
      <div className = {styles.choose_schedule}>
        <div className = {styles.days}>
            < AiOutlineLeft onClick={handlePrev} className = {styles.iconlr}/>
            {dates.map((date, index) => (
                <div className = {`${styles.day} ${index === 2 ? styles.active : ''}`} key={index}>
                  <div>{ date.getDate()}  {month[date.getMonth()]}</div>
                  <div className = {styles.month}> {day[date.getDay()]}</div>
                </div>
              ))}
  
            <AiOutlineRight onClick={handleNext} className = {styles.iconlr}/>
        </div>
        <div className = {styles.location}>
          <div className = {styles.site}>
            <GrLocation className = {styles.iconLocation}/>
            <select className = {styles.locationOption}>
              <option value = "HN">HN City</option>
              <option value = "HCM">HCM City</option>
              <option value = "ĐN">ĐN City</option>
            </select>
          </div>

          <div className = {styles.search}>
              <input
                  type="search"
                  placeholder="Ha noi"
                  className = {styles.inputSearch}
              />
              <AiOutlineSearch className = {styles.iconSearch}/>
          </div>
        </div>
         
        <div className = {styles.Cinemas}>
          <div className = {styles.nameCinema}>HA NOI CGV 1</div>
          <div className = {styles.numberCinema}>Rạp số 1</div>
          
          {Movie("REGULAR 2D", "VND 45.000 - 50.000", ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"], ["11:00", "13:00"])}
          {Movie("GOLD class 2d", "VND 80.000 - 100.000", ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"], ["11:00"])}
        </div>

        <div className = {styles.Cinemas}>
          <div className = {styles.nameCinema}>HA NOI CGV 2</div>
          <div className = {styles.numberCinema}>Rạp số 2</div>
          {Movie("REGULAR 2D", "VND 45.000 - 50.000", ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"], ["11:00", "14:00"])}
          {Movie("GOLD class 2d", "VND 80.000 - 100.000", ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"], ["11:00"])}
        </div>

       
      </div>

      <div className = {styles.movie}>
        <div className = {styles.movieInfo}>
          <div className = {styles.image} >
            <img className = {styles.logoFilm} src={images.no_way_home} alt="No Way Home"/>
          </div>

          <div className = {styles.movieContainer}>
            <div className = {styles.nameMovie}>
              spiderman: no way Home
            </div>
            <div className = {styles.info}>
              <div className = {styles.infoElement}>
                <div className = {styles.key}>Thể loại</div>
                <div className = {styles.value}>Hành động</div>
              </div>
              <div className = {styles.infoElement}>
                <div className = {styles.key}>Thời lượng</div>
                <div className = {styles.value}>2h 28ph</div>
              </div>
              <div className = {styles.infoElement}>
                <div className = {styles.key}>Đạo diễn</div>
                <div className = {styles.value}>Jon Watts</div>
              </div>
            </div>

          </div>
        </div>
        <div className = {styles.ticket}>
            <div className = {styles.nameCinema}>HA NOI CGV 1</div>
            <div className = {styles.day}>Friday, 4 April 2023</div>
            <div className = {styles.site}>
              <div className = {styles.nameType}>gold class 2D</div>
              <div className = {styles.nameType}>14:40</div>
            </div>
            <div className = {styles.note}>Lựa chọn chỗ ngồi sẽ được thực hiện sau đó</div>
          
            <Link to = "/seats">
                <button className = {styles.button}>Đặt chỗ ngồi</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default ScheduleSelection;



