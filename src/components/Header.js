import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

import './streams/Header.css'



const Header = () => {
    return (
    <div>

            <header>
        <nav>
            <div class="logo">
                <img/>
                 <Link to="/" >
                     <h1>MusicApp</h1>
                </Link>
            </div>
            <ul>
                <li><a href="#index.html" class="active">Home</a></li>
                <li><a href="#">Download Songs</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="contact.html" class="active">Contact me</a></li>
            </ul>
        </nav>
    </header>        
    
        
    </div>
    )
}


export default Header;