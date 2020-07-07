import React from 'react';
import './footer.css';
import email from './email.png';
import phone from './phone.png';
import insta from './instagram.png';

function Footer() {
  return (
    <footer>
            <div className="wrap">
                <div className="left footer-left">
                    <div className="contacts">
                        <img src={email} alt="email"/>
                        <a href="" className="contact-info email">123@mail.ru</a><br/>
                        <img src={phone} alt="phone"/>
                        <a href="" className="contact-info phone">8994423213</a><br/>
                        <img src={insta} alt="instagram"/>
                        <a href="" className="contact-info insta">www</a>
                    </div>
                </div>
                <div className="center footer-center">
                    <p className="center-text footer-center-text">Запись по телефону или в личном кабинете</p>
                </div>
                <div className="right footer-right"></div>
                <div className="clearfix"></div>
            </div>
        </footer>
  );
}

export default Footer;