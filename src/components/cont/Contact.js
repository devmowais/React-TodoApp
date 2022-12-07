import './contact.css'
import React, { useState } from 'react';

export const Contact = () => {

  const [formState, setFormSate] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const changeHandler = (event) => {
    setFormSate({ ...formState, [event.target.name]: event.target.value });
  }

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(formState);

    const config = {
      // Host: "smtp.elasticemail.com",
      SecureToken: "87a08235-837c-47a3-bd6f-6312a5743b33",
      To: 'osherwani125@gmail.com',
      From: formState.email,
      Subject: "Contact form enquiry",
      Body: `Name: ${formState.name} Email: ${formState.email} Phone#: ${formState.phone} Message: ${formState.message}`
    };
    if (window.Email) {
      window.Email.send(config).then(() => {
        alert("Sent Seccessfully!");
      })
    }
  }



  return (
    <div className='con-container'>

      <div className='contact'>
        <form className='con-form' onSubmit={sendEmail}>
          <h3>GET IN TOUCH</h3>
          <input type='text' name="name" id="name" placeholder='Enter your Name' value={formState.name} onChange={changeHandler}></input>
          <input type='email' name="email" id="email" placeholder='Enter your Email' value={formState.email} onChange={changeHandler}></input>
          <input type='number' name="phone" id="phone" placeholder='Enter your Phone no.' value={formState.phone} minLength={11} onChange={changeHandler}></input>
          <textarea type='textarea' name='message' id='message' rows={4} maxLength={250} placeholder='How may i help you?' value={formState.message} onChange={changeHandler}></textarea>
          <button className='btn-con mx-auto' type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}


