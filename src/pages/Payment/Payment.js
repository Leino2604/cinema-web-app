import styles from './Payment.module.scss';
import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import images from '../../assets/images'
function Payment () {
  const [showMethodPayment, setMethodPayment] = useState(false)
  const handleClose1 = () => setMethodPayment(false);
  const handleshowMethodPayment = () => setMethodPayment(true);
  

  const [showBack, setShowBack] = useState(false);
  const handleClose = () => setShowBack(false);
  const handleShowBack = () => setShowBack(true);
return (
    <div className = {styles.sitePayment}>
        <div className= {styles.ticketInfo}>
            <div className = {styles.textHeader}>Thông tin vé</div>

            <div className = {styles.info}>
                <label>Tên phim</label>  
                <div className= {styles.content}>spiderman no way home</div>  
            </div>  
            <div className = {styles.info}>
                <label>Ngày chiếu</label>  
                <div className= {styles.content}>30 June 2023</div>  
            </div>    
            <div className = {`${styles.info} ${styles.typeTicket}`}>
                <div>
                    <label>Loại phim</label>  
                    <div className= {styles.content}>2D</div>  
                </div>
                <div>
                    <label>Giờ chiếu</label>  
                    <div className= {styles.content}>14:40</div>  
                </div>

            </div>    
            <div className = {styles.info}>
                <label>Tiket (3)</label>  
                <div className= {styles.content}>C8,C9,C10</div>  
            </div>  

            <div className = {styles.back}>
                
                <FaArrowLeft  onClick={handleShowBack} style = {{verticalAlign: "-3px", cursor:'pointer'}}/>
                <span className = {styles.backText}>Trở lại</span>
            </div>    
        </div>  
         
        <div className = {styles.orderInfo}>
            <div className = {styles.textHeader}>Tóm tắt đơn hàng</div>
            <div className = {styles.info}>
                <div className = {styles.labelOrder}>Chi tiết giao dịch</div>
                <div className = {styles.labelTag}>
                    <span>Chỗ ngồi</span>
                    <span>50.000</span>
                </div>

                <div className = {styles.labelTag}>
                    <span>Phí dịch vụ</span>
                    <span>3.000</span>
                </div>
            </div>

            <div className = {styles.info}>
                <div className = {styles.labelOrder}>Giảm giá</div>
                <div className = {styles.labelTag}>
                    <span>Thẻ tích điểm</span>
                    <span>40.000</span>
                </div>
            </div>

            <div className = {styles.info}>
                <div className = {styles.labelTag}>
                    <span className = {styles.labelOrder}>Tổng tiền</span>
                    <span style= {{fontWeight: 'bold'}}>13.000</span>
                </div>
                    
            </div>

            <div className = {`${styles.labelTag} ${styles.mt20}`}>
                <span className = {styles.labelOrder}>
                    Phương thúc thanh toán
                    <div className = {styles.iconMethodPayments}>
                        <img alt = "" className = {styles.iconMethodPayment} src = {images.momoLogo}></img>
                        <img alt = "" className = {styles.iconMethodPayment} src = {images.ocbLogo}></img>
                    </div>
                </span>
                <div className = {styles.viewMethodPayment} onClick = {handleshowMethodPayment}>Chi tiết</div>
            </div>
         
            <Link to = "/payment/success">
                <button className = {styles.buttonPayment}>XÁC NHẬN THANH TOÁN</button>
            </Link>
            
        </div>
        <Modal show={showBack} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Trở lại?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Ghế bạn đã chọn trước đó sẽ bị hủy và bạn sẽ phải chọn lại</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Đóng
            </Button>
            <Link to = "/seats">
                <Button style= {{color: '#FFBE00',  backgroundColor: '#1A2C50'}}onClick={handleClose}>
                    Trở lại
                </Button>
            </Link>
            </Modal.Footer>
        </Modal>

        <Modal show={showMethodPayment} onHide={handleClose1} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title style = {{paddingLeft: '15px'}}>Chọn phương thức</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className = {styles.methodContainer}>
                    <div>
                        <div className = {styles.methodTitle}>Ứng dụng</div>
                        <div className = {styles.methodPayment}>
                            <img alt = "" className = {styles.logoMethodPayment} src = {images.momoLogo}></img>
                            <span>Momo</span>
                        </div>
                        <div className = {styles.methodPayment}>
                            <img alt = "" className = {styles.logoMethodPayment} src = {images.zaloLogo}></img>
                            <span>Zalo</span>
                        </div>
                    </div>
                    <div>
                        <div className = {styles.methodTitle}>Ngân hàng</div>
                        <div className = {styles.methodPayment}>
                            <img alt = "" className = {styles.logoMethodPayment} src = {images.vcbLogo}></img>
                            <span>Vietcombank</span>
                        </div>
                        <div className = {styles.methodPayment}>
                            <img alt = "" className = {styles.logoMethodPayment} src = {images.ocbLogo}></img>
                            <span>OCB</span>
                        </div>
                        
                    </div>

                </div>
            </Modal.Body>
            
        </Modal>
    </div>

    
)
}

export default Payment