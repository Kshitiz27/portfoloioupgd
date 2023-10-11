import React from 'react';
import {
  MDBFooter,
  MDBContainer,

  MDBBtn
} from 'mdb-react-ui-kit';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footer.css"

export default function Footer() {
  return (
    
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0 btns'>
        <section className='mb-4 btns'>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://mail.google.com/mail/u/?authuser=5495.stkabirdin@gmail.com'
            role='button'
            target='_blank'
          >
            <EmailIcon/>
            <span> Gmail</span>
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/kshitiz__sharma_27/'
            target='_blank'
            role='button'
          >
            <InstagramIcon/>
            <span> Instagram</span>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://linkedin.com/in/kshitizsharma27'
            role='button'
            target='_blank'
          >
            <LinkedInIcon/>
            <span> LinkedIn</span>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/Kshitiz27'
            role='button'
            target='_blank'
          >
            <GitHubIcon/>
            <span> Github</span>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
         &nbsp; Kshitiz Sharma
        </a>
      </div>
    </MDBFooter>
  );
}