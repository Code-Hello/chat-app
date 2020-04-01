import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

const Contact = ({name, avatar, online}) => {
    return (
        <div className="Contact">
            <div>
                <img className="avatar" src={avatar} alt="user's avatar"/>
            </div>
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <span className={online ? 'status-online' : 'status-offline'}></span>
                    <p className="status-text">{online ? 'online' : 'offline'}</p>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool
}

export default Contact;