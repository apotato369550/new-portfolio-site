import React from 'react'
// import './hex.css'
import me from '../assets/me.jpg'

function Hex() {
    return (
        <section className="hex-container">
                <div className="hex-background">
                    <img src={me} alt="me.jpg" className="me-image" />
                    <div className="hex-content">
                        <h2>Learn more about me!</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                        <div className="button-container">
                            <a href="#">About Me</a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Hex