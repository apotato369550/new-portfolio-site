import './css/ContactForm.css'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

function ContactForm() {
    const contactFormRef = useRef<HTMLFormElement>(null);
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        console.log("Submit button clicked!")

    }

    return (
        <section className="contact-form">
            <h1>Contact Me!</h1>
            <p>Feel free to get in touch with me using the form below or through the provided contact information.</p>
            
            <form id="contact-form">
                <div className="user-info">
                    <input type="text" id="name" name="name" placeholder="Your Name Here" required />
                    <input type="email" id="email" name="email" placeholder="Your Email Here"  required />
                </div>
                
                <div className="user-message">
                    <textarea id="message" name="message" rows={5} required  placeholder="Your message here..."></textarea>
                </div>

                <button type="submit" onClick={handleSubmit}>Send Message</button>

                <div className="contact-info">
                    <h2>Other Contact Information</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope} /> email@example.com</li>
                        <li><FontAwesomeIcon icon={faPhone} /> 123-456-7890</li>
                        <li><FontAwesomeIcon icon={faMapMarker} /> City, State, Country</li>
                        
                    </ul>
                </div>
            </form>
        </section>
    )
}

export default ContactForm