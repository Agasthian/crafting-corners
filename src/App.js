import React from 'react'
import './App.css';
import Logo from './img/logo1.png'


const App = () => {
  return (
    <div className="App">
      <div className="page-manintance__container">

        <div className="section1">
          <h1>Crafting Corners.</h1>  
          <h3>Interior Design firm,  Chennai</h3>
          <p>We build beautiful things for creative people.</p>
          
          <h2>We're launching soon</h2>
        </div>
        
        <div className="section2">
          <div className="section2_bg">
            <img src={Logo} alt="crafting corner chennai logo" />
              <h2>About Us </h2>

              <div className="abouttxt">
                <p>We provide a fresh and feasible approach on each project that handle with optimum knowledge in
                  contemporary, modern and traditional design and a vast experience on residential, hospitality and corporate
                spaces</p>
              </div>
              <br />
              <div className="contact-us">
                <div className="contact1">
                <span class="material-symbols-outlined">
                  call
                </span>
                <br />
                <a href="https://craftingcorners.co.in/">Phone: <br /> +91-996-265-6247</a>
                </div>
                <div className="contact2">
                  <span class="material-symbols-outlined">
                    location_on
                  </span>
                  <br />
                 <a href="https://craftingcorners.co.in/fa">Chennai, India</a> 
                </div>
                <div className="contact3">
                  <span class="material-symbols-outlined">
                    language
                  </span>
                  <br />
                  <a href="https://www.instagram.com/crafting__corners/">Crafting Corner Social </a>
                </div>
              </div>

              <ul>
              <li>Email: craftingcornersindia@gmail.com</li>
              <li></li>
              <li>Visit our social media for updates:</li>
              <li>
                <a href="https://facebook.com/example">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/crafting__corners/">Instagram</a>
              </li>
            </ul>
          </div>
          
        </div>
        
      </div> 
    </div>
  )
}

export default App