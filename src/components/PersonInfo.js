import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';

export default function PersonInfo() {
    return (
        <div>
            <h1 className='name-surname'>Laura Smith</h1>
            <h5 className='job'>Frontend Developer</h5>
            <a href="https://www.saatchiart.com/laurajeanrachelsmith" className='link' target="_blank" rel="noreferrer">laurasmith.website</a>
            <div className='btn-container'>
                <a href="#" className='email btn'><FontAwesomeIcon icon={faEnvelope} fixedWidth /><span> Email</span></a>
                <a href="#" className='linkedin btn'><FontAwesomeIcon icon={faLinkedin} fixedWidth/><span> LinkedIn</span></a>
                </div>
        </div>
    )
}
   

