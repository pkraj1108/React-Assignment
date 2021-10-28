import React from 'react'
import './Home.css';
import '../App.css';

function HeroSection() {
    return (
        <>
        <div className="container">
            <div className="image"></div>
            </div>
            <div className="detail">
                <h3 className="name">Prince Kumar</h3>
                <h3 className="email">pkraj1108@gmail.com</h3>
                <h3 className="company">I'm a Student</h3>
            </div>

            <footer>
        <span>Created By <a href="#">Prince Kumar</a> | <span class="far fa-copyright"></span>2020 All rights reserved.</span>
    </footer>

        </>
    )
}

export default HeroSection