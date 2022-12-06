import './contact.css'
import React, { useState } from 'react';

export const Contact = () => {
  
  const intValues = {
    name: "",
    email: "",
    phone: "",
    message:""
  }
  
  const [formState, setFormSate] = useState(intValues);
  
  
  const changeHandler = (event) => {
    setFormSate({ ...formState, [event.target.name]: event.target.value })
  }
  
  const sendEmail = (event) => {
    event.preventDefault();
    const config = {
      Host: "smtp.elasticemail.com",
      SecureToken: "87a08235-837c-47a3-bd6f-6312a5743b33",
      To: 'osherwani125@gmail.com',
      From: formState.email,
      Subject: "Contact form enquiry",
      Body: `$Name: ${formState.name} <br>
      Email: ${formState.email} <br>
      Phone#: ${formState.phone} <br>
      Message: ${formState.message}`
  };
  if (window.Email) {
    window.Email.send(config).then( () => alert("Seccessfully!"));
  }
  
  
}



  return (
    <div className='con-container'>

      <div className='contact'>
        <form className='con-form' onSubmit={() => { (sendEmail()) }}>
          <h3>GET IN TOUCH</h3>
          <input type='textarea' name="name" id="name" placeholder='Enter your Name' value={formState.name} onChange={changeHandler} required></input>
          <input type='email' name="email" id="email" placeholder='Enter your Email' value={formState.email} onChange={changeHandler} required></input>
          <input type='number' name="phone" id="phone" placeholder='Enter your Phone no.' value={formState.phone} minLength={11} onChange={changeHandler} required></input>
          <textarea type='textarea' name='message' id='message' rows={4} maxLength={250} placeholder='How may i help you?' value={formState.message} onChange={changeHandler} required></textarea>
          <button className='btn-con mx-auto' type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}





