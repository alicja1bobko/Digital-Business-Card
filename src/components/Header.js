import React from 'react';
import photo from '../images/mainPhoto.png';
import '../index.css';


export default function Header() {
    return (
    <div>
    <header className="App-header">
     <img src={photo} className="personal-photo" alt="business photography" />
        </header>
        </div>
   ) }