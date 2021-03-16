import React from 'react';
import call from './call.png';
import mail from './mail.png';
import './Contact.css';

const Contact = () => {
    return(
        <div>
            <div className="CONTACT">
                <h2 style={{textAlign:"center"}}>FOR ANY QUERY CONTACT US</h2>
                <br/>
                <div className="contact-main">
                    <div>
                    <p><img src={call} style={{height:"21px",width:"21px"}} /> <b>Call us: </b> 1234567892</p>
                    </div>
                    <div>
                    <p><img src={mail} style={{height:"21px",width:"21px"}} />
                        <b>Mail us: </b> abc@gmail.com</p>
                    </div>
                </div>
                <div style={{textAlign:"center"}}>Created by DIVYANSHI OBEROI</div>
            </div>
        </div>
    );
}
export default Contact;