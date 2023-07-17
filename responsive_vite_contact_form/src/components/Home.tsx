import './css/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Home() {
    return (
        <section className="home">
            <h1>Hi! I'm...</h1>
            <div className="name-container">
                <h1><u>J</u>ohn <u>A</u>ndre</h1> 
                <h1><u>Y</u>ap</h1>
            </div>
            <h2>Software Engineer</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi ipsam exercitationem iure incidunt architecto, et hic quam nesciunt perspiciatis, quidem dolores molestiae. Iste ratione magni necessitatibus. Ab, rem rerum.</p>
            
            <div className='user-interactables-container'>
                <div className="button-container">
                    <a href="#">About Me</a>
                    <a href="#">Projects</a>
                </div>

                <div className="socials-icon-container">
                    <h2>My Socials</h2>
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                    </ul>
                </div>
            </div>
            
        </section>
    )
}

export default Home