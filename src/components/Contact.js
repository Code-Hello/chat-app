import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        }
    }

    render() {
        return (
            <div className="Contact">
                <div>
                    <img className="avatar" src={this.props.avatar} alt="user's avatar"/>
                </div>
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div 
                        className="status" 
                        onClick= {event => {
                            let newState = !this.state.online;
                            this.setState({online: newState});
                        }}>
                            <span className={this.state.online? 'status-online' : 'status-offline'}></span>
                            <p className="status-text">{this.state.online ? 'online' : 'offline'}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool
}

export default Contact;