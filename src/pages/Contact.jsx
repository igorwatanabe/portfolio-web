import { NavLink } from 'react-bootstrap';
import emailLogo from '../assets/email-logo.png';
import githubLogo from '../assets/github-logo.png';
import instagramLogo from '../assets/instagram-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';
import whatsappLogo from '../assets/whatsapp-logo.png';
import Header from "../components/Header";
import '../styles/Contact.css';


function Contact() {
  return (
    <div>
      <Header/>
      <h1>Contatos</h1>
      <div className='logos'>
        <NavLink href="https://wa.me/5518991056262">
          <img
          src={whatsappLogo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt='whatsapp-logo' 
          />
        </NavLink>
        <NavLink href='https://www.linkedin.com/in/igor-watanabe/'>
          <img
            src={linkedinLogo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt='linkedin-logo' 
          />
        </NavLink>
        <NavLink href='https://www.instagram.com/igorwatanabe/'>
          <img
            src={instagramLogo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt='instagram-logo' 
          />
        </NavLink>
        <NavLink href='https://github.com/igorwatanabe'>
          <img
            src={githubLogo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt='github-logo' 
          />
        </NavLink>
        <NavLink href='mailto:eng.igorwatanabe@gmail.com'>
          <img
            src={emailLogo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt='email-logo' 
          />
        </NavLink>
      </div>
    </div>
  )
}

export default Contact