import React, { Component } from 'react';
import GoogleAuth from '../GoogleAuth';
import './Landing.css';
import SpotifyAuth from './SpotifyAuth';
import music2 from './music2.jpg';

class Landing extends Component {
    
    render() { 
        return ( 
            <div className="container">
            <div className="box">
                <img src={music2} alt={"my_photo"} className="box-img"/>
                <h1>Music nourishes the soul. It gives you energy.</h1>
                <h5>We have got you covered</h5>

                <GoogleAuth/>

                <hr/>
                <p className="or">OR</p>
                

                <SpotifyAuth />

            </div>
            </div>
         );
    }
}
 
export default Landing ;