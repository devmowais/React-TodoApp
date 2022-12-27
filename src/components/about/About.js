import React from 'react'
// import { Link } from "react-router-dom"
import "./about.css";

export const About = () => {
  return (
    <div className='about-wrapper'>
      <div className='about-left'>
        <div className='about-left-content'>
          <div>
            <div className='shadow'>
              <div className='about-img'><img src="https://media.licdn.com/dms/image/D4D03AQHQsrIF3ceRJg/profile-displayphoto-shrink_800_800/0/1672139101339?e=1677715200&v=beta&t=6Eq4kMaHOhh_J8VfP4YAKv_R5ctn1pinOsBD0cJthHs" /></div>
            </div>
            <h2>Owais Sherwani</h2>
            <h3>Web Developer</h3>
          </div>
          <ul className="icons">
            <li><a href='https://twitter.com/' target="_blank" rel="noreferrer"><i className='fab fa-twitter'></i></a></li>
            <li><a href='https://linkedin.com/' target="_blank" rel="noreferrer"><i className='fab fa-linkedin'></i></a></li>
            <li><a href='https://instagram.com/' target="_blank" rel="noreferrer"><i className='fab fa-instagram'></i></a></li>
            <li><a href='https://facebook.com/' target="_blank" rel="noreferrer"><i className='fab fa-facebook-f'></i></a></li>
          </ul>
        </div>
      </div>

      <div className='about-right'>
      <h1>Hello<span>!</span></h1>
        <h2>Here's who I am & what I do</h2>
        <div className='about-btns'>
          <button type="button" className='btnn btnn-pink'>resume / CV</button>
          <a href="https://github.com/devmowais" target="_blank" rel="noreferrer">
        <button type="button" className='btnn btnn-white'>Git hub</button></a>
        </div>
        <div className='about-para'>
          <p> I'm a self-taught passionate <span className='clrChg'>Front-end Web Developer</span> from <span className='pak'>Pakistan</span> 🇵🇰.</p>
          <p>I have a diverse set of skills ranging from design, to <span className='clrChg'>HTML + CSS + JavaScript + React</span>... <br/> I also have a good understanding with <span className='clrChg'>Bootsrap and Tailwind CSS</span> framework... <br/> And, last but not least, Learning and Exploring <span className='clrChg'><u>Blockchain</u></span> development with <span className='clrChg'>Solidity</span>...</p>
        </div>
      </div>
    </div>

  )
}
