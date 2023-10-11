import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./HomePage.css"

const HomePage = () => {
    const head = {color:"aqua"}
  return (
    <div>
        <Navbar/>
        <div className="container">
            
            <div className="left">
                <h2>Hi! <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span></h2>
                <h1>I am Kshitiz Sharma</h1>
                <h2>Fullstack Developer</h2>
            </div>
            <div className="right">
                <img src="data:image/jpeg;base64,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" alt="study" />
            </div>
            
            
        </div>
        <div className="i">
        <h1 style={head}>Let me introduce myself</h1>
        <div className="intro">
           
                
                <div className="l">
                <span>Myself Kshitiz Sharma and i fell in love with programming when i was in my teenage. I was always excited to know the working behind great sites and applications. I am a Java fullstack developer.</span>
            </div>
            <div className="r">
        
  <div className="wrapper">
    <div className="border-circle" id="one"></div>
    <div className="border-circle" id="two"></div>
    <div className="background-circle">
      <div className="triangle-light"></div>
      <div className="body"></div>
     
      <div className="triangle-dark"></div>
    </div>
    <div className="head">
      <div className="ear" id="left"></div>
      <div className="ear" id="right"></div>
      <div className="hair-main">
        <div className="sideburn" id="left"></div>
        <div className="sideburn" id="right"></div>
        <div className="hair-top"></div>
      </div>
      <div className="face">
        <div className="hair-bottom"></div>
        <div className="nose"></div>
        <div className="eye-shadow" id="left">
          <div className="eyebrow"></div>
          <div className="eye"></div>
        </div>
        <div className="eye-shadow" id="right">
          <div className="eyebrow"></div>
          <div className="eye"></div>
        </div>
        <div className="mouth"></div>
        <div className="shadow-wrapper">
          <div className="shadow"></div>
        </div>
      </div>
    </div>
    <span className="music-note" id="one">&#9835;</span>
    <span className="music-note" id="two">&#9834;</span>
  </div>
            </div>
            </div>
            </div>
            
            <Footer/>
    </div>

  )
}

export default HomePage