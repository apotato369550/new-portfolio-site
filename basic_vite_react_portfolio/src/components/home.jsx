import React from 'react'
import './home.css'
import photo from '../assets/node.png'

function Home() {
    return (
        <section className="home">
            <div className="home-content">
                <div className="container">
                    <div className="name-container">
                        <span class="name-item"><span class="name-capital">J</span>ohn</span>
                        <br />
                        <span class="name-item"><span class="name-capital">A</span>ndre</span>
                        <br />
                        <span class="name-item"><span class="name-capital">Y</span>ap</span>
                    </div>
                    <div class="developer-container">
                        <h3>I am a</h3>
                        <img src={photo} class="developer-logo" alt="developer image" />
                        <h3>Developer</h3>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div class="button-container">
                    <a href="#">Cool Stuff</a>
                    <a href="#">Let's Talk</a>
                </div>
            </div>
            
            <div class="icon-container">
                <a href="#"><i class='bx bxl-github'></i></a>
                <a href="#"><i class='bx bxl-facebook-circle'></i></a>
                <a href="#"><i class='bx bxl-linkedin'></i></a>
            </div>
        </section>
    )
}

export default Home