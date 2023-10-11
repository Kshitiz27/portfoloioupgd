import React from 'react'
import "./Navbar.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

        <nav>
            <h1>Kshitiz Sharma</h1>
            <div className='right-nav'>
                <ul>
                    <li><Link to="/"><span id="cvicon"><HomeIcon/></span> Home </Link></li>
                    <li><Link to="/about"><span id="cvicon"><InfoIcon/></span> About </Link></li>
                    <li><Link to="/skill"><span id="cvicon"><SchoolIcon/></span> Skills </Link></li>
                    <li><Link to="/resume"><span id="cvicon"><InsertDriveFileIcon/></span> Resume/CV </Link></li>
                    <li><Link to="https://github.com/Kshitiz27" target="_blank"> <span id="giticon"><GitHubIcon/></span> Github</Link></li>
                </ul>
            </div>
        </nav>

    </div>
  )
}

export default Navbar