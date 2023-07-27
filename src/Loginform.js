import React, {useState} from 'react';
import axios from 'axios';
import loginform from "../src/Loginform.module.css";

const Loginform = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
   const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post('http://localhost:5000/api/login', {
          email,
          password,
        });
  
        console.log(response.data);
        // Handle successful login
  
        // Store the token in local storage
        localStorage.setItem('token', response.data.token);
  
        // Redirect to homepage
        window.location.href = '/';
      } catch (error) {
        console.log(error.response.data);
        // Handle login error
      }
    };

  return (
    <div className={loginform.logincontainer}>
      <div className={loginform.formcontainer}>
        <h2 className={loginform.heading}>Log in</h2>
        <form onSubmit={handleSubmit}>
        <div className={loginform.formgroup}>
        <input
            placeholder='Enter Email'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={loginform.formgroup}>
        <input
            placeholder='Enter Password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* <p className={loginform.para1}>By Clicking the button, you agree to the EULA 
        Click Here to Read Security and Privacy Policy</p> */}
        <button className={loginform.logbut} class type="submit">Log In</button>
      </form>
      </div>
      <div className={loginform.loginimagecontainer}>
        <img src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png" alt="Login" />
      </div>
    </div>
  );
};

export default Loginform;