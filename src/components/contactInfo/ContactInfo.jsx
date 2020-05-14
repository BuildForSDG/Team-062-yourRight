import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from '../../images/justlogo.svg';
import './ContactInfo.scss';

const ContactInfo = () => {
  return (
    <div className="contact">
      <div className="contact-grid">
        <div className="description">
          <img src={logo} height="100" alt="your right fight" />
          <p>
            YourRight's works is basically to save children's lives and to defend their rights from early childhood
            through adolescence. This is what we our goal .
          </p>
        </div>
        <div className="contact-services">
          <h5>What We Do</h5>
          <div className="line"> </div>
          <ul>
            <li>
              <a href="xasjckjsakca.com">Gender</a>
            </li>
            <li>
              <a href="xasjckjsakca.com">Social Policies</a>
            </li>
            <li>
              <a href="xasjckjsakca.com">Education</a>
            </li>
            <li>
              <a href="xasjckjsakca.com">Female protection</a>
            </li>
          </ul>
        </div>
        <div className="contact-address">
          <h5>Contact us</h5>
          <div className="line"> </div>
          <ul>
            <li>
              <LocationOnIcon />
              facebook.com/buildforsdg
            </li>
            <li>
              <PhoneIphoneIcon />
              0000000
            </li>
            <li>
              <MailOutlineIcon /> buildforSGG@andela.com
            </li>
          </ul>
          <div className="contact-address-socials">
            <a href="https://facebook.com/buildforsdg.com">
              <FacebookIcon fontSize="small" />
            </a>
            <a href="https://facebook.com/buildforsdg.com">
              <LinkedInIcon fontSize="small" />
            </a>
            <a href="https://facebook.com/buildforsdg.com">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="https://facebook.com/buildforsdg.com">
              <TwitterIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
