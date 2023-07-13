import './css/Header.css'
import hamburger from '../assets/hamburger.png'
import close from '../assets/close.png'

function Header() {
    return (
        <header>
            <nav className="nav">
                <input type="checkbox" id="nav-checkbox" className="nav-checkbox" />
                <label htmlFor="nav-checkbox" className="nav-toggle">
                    <img src={hamburger} width="100" height="100" className="hamburger" title="hamburger" />
                    <img src={close} width="100" height="100" className="close" title="close" />
                </label>
                <ul className="nav-menu">
                    <a href="/" className="logo">JAY</a>
                    <li><a href="/">Home</a></li>
                    <li><a href="about-me">About</a></li>
                    <li><a href="projects">Projects</a></li>
                    <li><a href="contact-me">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header