import React, {useState} from 'react';
import axios from 'axios';
import signupform from "../src/Signupform.module.css";

const Signupform = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
   
   const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post('http://localhost:5000/api/signup', {
          name,
          email,
          password,
          confirmpassword,
        });
  
        console.log(response.data);
        // Handle successful signup
  
        // Redirect to login page
        window.location.href = '/login';
      } catch (error) {
        console.log(error.response.data);
        // Handle signup error
      }
  };

  return (
    <div className={signupform.logincontainer}>
    <div>
    <div className={signupform.imagecontainer}>
        <img src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png" alt="Login" />
      </div>
      </div>
      <div className={signupform.formcontainer}>
        <h2 className={signupform.heading}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
         <div className={signupform.formgroup}>
           <input
           placeholder='Enter Name'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={signupform.formgroup}>
          <input
          placeholder='Enter Email Id'
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={signupform.formgroup}>
        <input
            placeholder='Enter Password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={signupform.formgroup}>
        <input
            placeholder='Confirm Password'
            type="password"
            id="confirmpassword"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {/* <p className={signupform.para1}>By Clicking the button, you agree to the EULA 
        Click Here to Read Security and Privacy Policy</p> */}
        <button className={signupform.signbut} type="submit">sign up</button>
      </form>
      </div>
      {/* <div className={signupform.imagecontainer}>
        <img src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png" alt="Login" />
      </div> */}
    </div>
  );
};

export default Signupform;



























// import React from 'react';

// const Signupform = () => {
//   const companyPhoneNumber = '+91 9507762094'; 
//   const handleChatWithUsClick = () => {
//     const phoneNumber = companyPhoneNumber.replace(/[^\d]/g, '');
//     const url = `https://wa.me/${phoneNumber}`;
//     window.open(url, '_blank');
//   };

//   return (
//     <button onClick={handleChatWithUsClick}>
//       Chat with Us
//     </button>
//   );
// };

// export default Signupform;









// import React, { useState } from 'react';

// const Signupform = () => {
//   const [whatsappNumber, setWhatsappNumber] = useState('');
//   const [message, setMessage] = useState('');

//   const handleInputChange = (event) => {
//     setWhatsappNumber(event.target.value);
//   };

//   const handleMessageChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleWhatsAppClick = () => {
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, '_blank');
//   };

//   return (
//     <header>
//       <h1>Your App</h1>
//       <input
//         type="text"
//         placeholder="Enter WhatsApp Number"
//         value={whatsappNumber}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         placeholder="Enter Message"
//         value={message}
//         onChange={handleMessageChange}
//       />
//       <button onClick={handleWhatsAppClick}>
//         Open WhatsApp
//       </button>
//     </header>
//   );
// };

// export default Signupform;


// import React from 'react';

// const Signupform = () => {
//   const handleWhatsAppClick = () => {
//     window.open('https://web.whatsapp.com/', '_blank');
//   };

//   return (
//     <header>
//       <h1>Your App</h1>
//       <button onClick={handleWhatsAppClick}>
//         Open WhatsApp
//       </button>
//     </header>
//   );
// };

// export default Signupform;





