import styles from "./Login.module.scss"
import {Link } from "react-router-dom"
import {useState} from "react"
import { useNavigate  } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { loginUser} from "../../redux/apiRequest"
// import { useSelector} from "react-redux";

const Login =  () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const user = useSelector((state) => console.log(state))
  
  const navigate = useNavigate ();
  const dispatch = useDispatch();
  const handleLogin = async(e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    }
    loginUser(newUser, dispatch, navigate)
  }

  return (
    <div className= {styles.container}>
        <div className = {styles.container_form}>
            <div className= {styles.formTitle}>Welcome, User</div>
            <form onSubmit= {handleLogin} className = {styles.form}>
                <input 
                  className = {styles.input} 
                  type="text" 
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <input
                   className = {styles.input}
                   type="password" 
                   minLength="6"
                   placeholder="Enter your password"
                  
                   onChange = {(e) => setPassword(e.target.value)}
                  required
                />
               
                <input className = {`${styles.input} ${styles.signIn}` } type="submit" value = "Log in"/> 
            </form>
            <p className={styles.content}>  Don't have an account yet? </p>
            <Link className={styles.signUp} to="/signup">Register here  </Link>
            <Link className={styles.signUp} to="/">Back to home  </Link>
        </div>
    </div>
  );
};

export default Login