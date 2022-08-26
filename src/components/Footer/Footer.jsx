import React from 'react'
import "./Footer.css"
import { WhatsappLogo } from '../../images'

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerText">
                <h2>Need Help? Get in touch with us.</h2>
                <div className="whatbtn">
                    <button> <img src={WhatsappLogo} alt="" /> Chat with Us</button>
                </div>
            </div>
            <div className="whatLogo">

                <img src={WhatsappLogo} alt="" />
            </div>

        </div>
    )
}

export default Footer