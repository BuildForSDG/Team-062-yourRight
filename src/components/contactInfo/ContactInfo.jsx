import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from '../../images/justlogo.svg';

const ContactInfo = () => {
  return (
    <div className="contact">
      <div className="contact-grid">
        <div className="description">
          <img src={logo} height="100" alt="your right fight" />
          <p>
            Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A
            Galley Of Type And Scrambled It To Make A Type.
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
              {' '}
              <LocationOnIcon /> demo address #8901 Marmora Road Chi Minh City, Vietnam
            </li>
            <li>
              <PhoneIphoneIcon />
              0800-123456 (24/7 Support Line)
            </li>
            <li>
              <MailOutlineIcon /> buildforSGG@andela.com
            </li>
          </ul>
          <div className="contact-address-socials">
            <a href="wlkww.com">
              <FacebookIcon fontSize="small" />
            </a>
            <a href="wlkww.com">
              <LinkedInIcon fontSize="small" />
            </a>
            <a href="wlkww.com">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="wlkww.com">
              <TwitterIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
