import styles from "./Signup.module.scss"
import {Link} from "react-router-dom"
import {useState} from "react"
import { useNavigate  } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { signupUser} from "../../redux/apiRequest"
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate ();
  const dispatch = useDispatch();
  const handleSignup = async(e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
      phone: phone,
      dob: dob
  }
  signupUser(newUser, dispatch, navigate)
  }
  return (
    <div className= {styles.container}>
        <div className = {styles.container_form}>
            <div className= {styles.formTitle}>Sign up</div>
            <form onSubmit= {handleSignup} className = {styles.form}>
                <label className = {styles.label} htmlFor="username">Username</label>
                <input placeholder = "Enter username" onChange = {(e) => setUsername(e.target.value)} className = {`${styles.input} ${styles.label}` } type="text"  required />
                <label className = {styles.label} htmlFor="password">Password</label>
                <input minLength = "6" placeholder = "Enter password" onChange = {(e) => setPassword(e.target.value)} className = {`${styles.input} ${styles.label}` } type="password"  required />
                <label className = {styles.label} htmlFor="email">Email</label>
                <input placeholder = "Enter email" onChange = {(e) => setEmail(e.target.value)} className = {`${styles.input} ${styles.label}` } type="email" required />
                <label className = {styles.label} htmlFor="phone">Phone</label>
                <input placeholder = "Enter phone" onChange = {(e) => setPhone(e.target.value)} className = {`${styles.input} ${styles.label}` } type="tel" pattern="[0-9]{10}" required />
                <label className = {styles.label} htmlFor="dob">Date of Birth</label>
                <input onChange = {(e) => setDob(e.target.value)} className = {`${styles.input} ${styles.label}` } type="date" id="dob" required />
                <input className = {`${styles.input} ${styles.signIn}` } type="submit" value = "Sign up"/> 
            </form>
   
            <Link className={styles.signUp} to="/login">Back to Login  </Link>
            <Link className={styles.signUp} to="/home">Back to Home  </Link>
        </div>
    </div>
  );
};

export default Signup