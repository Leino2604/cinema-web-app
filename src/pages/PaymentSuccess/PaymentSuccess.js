import styles from './PaymentSuccess.module.scss';
import React from 'react';
import images from '../../assets/images'
import { Link } from "react-router-dom";

function PaymentSuccess () {
  
return (
    <div className = {styles.container}>
        <di className = {styles.titleSuccess}>Thanh toán thành công</di>
        <img alt= "success"src = {images.paymentsuccess}></img>
        <div className = {styles.noteSuccess}>Chi tiết giao dịch đã được gửi đến email của bạn. Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi</div>
        <Link to = "/">
            <button className={styles.backHomeBtn}>Quay lại trang chủ</button>
        </Link>
    </div>

    
)
}

export default PaymentSuccess