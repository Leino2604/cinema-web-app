import React  from 'react';
import './Header.css';
import Logo from '../assets/img/logo.png';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './HeaderElement';
import { BiLogOut } from "react-icons/bi"
import { useSelector,  useDispatch} from "react-redux";
import { useNavigate} from "react-router-dom"
import {logoutUser} from "../redux/apiRequest"
import axios from "axios"
function Header() {
  const user = useSelector((state) => state.auth.login.currentUser)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const aToken = user?.aToken;
  const id = user?._id;
  
  const axiosJWT = axios.create()
  const handleLogOut = () => {
    logoutUser(dispatch, id, navigate, aToken, axiosJWT);
  }

  return (
    <>
      <Nav style = {{padding: "10px 150px"}}>
        <NavLink to='/'>
          <img src={Logo} alt='Logo' />
        </NavLink>
        <Bars />

        <NavMenu>
          <NavLink to='/' activestyle = "true">
            About
          </NavLink>
          <NavLink to='/' activestyle = "true">
            Services
          </NavLink>
          <NavLink to='/' activestyle = "true">
            Contact Us
          </NavLink>
          {user? (
            <>
            <img  src= "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png" alt='Default Avatar' style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
            <span style = {{paddingLeft: "20px", color: "#fff"}}> {user.username}  </span>
            
            <NavLink onClick = {handleLogOut}to="/home" className="navbar-logout"> 
              <BiLogOut style= {{color: "#fff", fontSize: "30px"}}/>
            </NavLink>

            {user.role === "Manage" ? (
                <>
                  <NavLink style = {{paddingLeft: "10px",color: "#fff", textDecoration: "none"}}to="/revenue" className="navbar-revenue"> 
                    Thống kê doanh thu
                  </NavLink>

                  <NavLink style = {{color: "#fff", textDecoration: "none"}}to="/management" className="navbar-manage"> 
                    Quản lý phim/món ăn
                  </NavLink>
                </>

                
            ) : (
                <></>
            )}  

          {user.role === "Admin" ? (
                <>
                  <NavLink to="/manageAccount" className="navbar-logout"> 
                    Tạo account
                  </NavLink>
                </>
            ) : (
                <></>
            )}  

            </>
          ) : (    
            <>
            <NavLink to='/signup' activestyle = "true">
              Sign Up
            </NavLink>
            <NavBtn>
              <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </NavBtn>
          </>
)}
          
        </NavMenu>

        
      </Nav>
      
    </>
  )
}

export default Header;