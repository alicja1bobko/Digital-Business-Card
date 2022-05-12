import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faInstagram, faGithubSquare } from '@fortawesome/fontawesome-free-brands';

export default function Footer() {
    return (
        <footer>
            <div className='icons-container'>
            <FontAwesomeIcon icon={faTwitterSquare} className="footer-icon" />
            <FontAwesomeIcon icon={faFacebookSquare} className="footer-icon"/>
                <FontAwesomeIcon icon={faInstagram} className="footer-icon instagram" />
            <FontAwesomeIcon icon={faGithubSquare} className="footer-icon"/>
                </div>
    </footer>

    )
}