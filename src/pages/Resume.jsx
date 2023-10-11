import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Resume.css';
import {Link} from 'react-router-dom';






function Resume() {
    return (
        <div>
            <Navbar />

            <h1 style={{ "color": "white", "marginTop": "190px" }}>Click here to View Resume</h1>
            <button className="btn" style={{ "marginTop": "70px" }}><i className="fa fa-download my-3"></i> <Link
                style={{"color":"white"}}
                target='_blank'
                to='https://drive.google.com/file/d/1jlgp9aySmYRdgCZnjtOlDb_EbOm2-mod/view?usp=sharing'
                download='resume.pdf'
            > View Resume
            </Link></button>
            <Footer />
        </div>
    );
}

export default Resume