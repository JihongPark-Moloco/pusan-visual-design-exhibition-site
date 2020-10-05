import React from 'react';
import {Image} from 'react-bootstrap';
import './footer.css';

const Footer = () =>{
    return (
        <div className="footer">
            <div className="copyright font-s13-w5-b9">
                copyright <span className="times">@</span> PNU Visual Design Graduation Exhibition All rights reserved.
            </div>
            <div className="logo">  
                <Image className="logo-img" src="/image/common/logo.png" alt="logo" fluid />
            </div>
        </div>
    );
}

export default Footer;