import React from 'react';
import '../index.css';


export default function MainContent() {
    return (
        <div>
        <article>
            <h3 className='article-header'>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
        </article>
            <article>
            <h3 className='article-header'>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
            </article>
            </div>
    )
}