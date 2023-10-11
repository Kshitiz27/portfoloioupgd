import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "./About.css"

const About = () => {
  return (
    <div>
<Navbar/>
        <div className="container">
            <div className="leftt">
            <h1>Know Who I am!</h1>
           
                <div className='lefty'>I am Kshitiz Sharma basically from Uttar Pradesh and born and raised in Jaipur. I did my 10th from Ahmedabad, 12th from Jaipur and my college from Greater Noida</div>
                <div className='lefty'>I studied B.Tech from Noida Institute of Engineering and Technology. I have a keen interest in web development, software development and application development. I have nearly 1 year of internship experience.</div>
                <div className='lefty'>Apart from coding my other hobbies and interests are:-</div>
                <ul>
                    <li>Playing games like cricket, chess and basketball</li>
                    <li>Playing guitar and listening to music</li>
                </ul>
                <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Strive to build things that make a difference!"{" "}
          </p>
            </div>
        
            <div className="rightt">
              <img src="https://c4.wallpaperflare.com/wallpaper/11/624/62/simple-desk-clocks-books-wallpaper-preview.jpg" alt="" />
            </div>
        </div>
<Footer/>
    </div>
  )
}

export default About