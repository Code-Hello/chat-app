import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <div>
                <img className="avatar" src="https://randomuser.me/api/portraits/men/81.jpg" alt="user's avatar"/>
            </div>
            <div>
                <h4 className="name">Joe Rodriguez</h4>
                <div className="status">
                    <span className="status-online"></span>
                    <p className="status-text">online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;