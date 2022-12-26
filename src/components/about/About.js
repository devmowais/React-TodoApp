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
              <div className='about-img'><img src='https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=' /></div>
            </div>
            <h2>Owais Sherwani</h2>
            <h3>Web Developer</h3>
          </div>
          <ul className="icons">
            <li><i className='fab fa-twitter'></i></li>
            <li><i className='fab fa-linkedin'></i></li>
            <li><i className='fab fa-instagram'></i></li>
            <li><i className='fab fa-facebook-f'></i></li>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur possimus ullam quaerat, laboriosam ex voluptate aliquid laborum, obcaecati ratione accusamus! Ea nisi modi dolor nam numquam? Temporibus, molestias amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure tempora alias laudantium sapiente impedit!</p>
        </div>
      </div>
    </div>

  )
}
