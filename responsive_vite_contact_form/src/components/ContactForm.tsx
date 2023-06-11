import './css/ContactForm.css'

function ContactForm() {
    return (
        <section className="contact-form">
            <h2>Contact Me!</h2>
            <p>Feel free to get in touch with me using the form below or through the provided contact information.</p>
            
            <form>
                <div className="user-info">
                    <input type="text" id="name" name="name" placeholder="Your Name Here" required />
                    <input type="email" id="email" name="email" placeholder="Your Email Here"  required />
                </div>
                
                <div className="user-message">
                    <textarea id="message" name="message" rows={5} required  placeholder="Your message here..." ></textarea>
                </div>
                
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}

export default ContactForm