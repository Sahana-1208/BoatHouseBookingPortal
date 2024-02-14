import '../assets/css/ContactUs.css';
function ContactUs(){
    return(
        <>
        <div className="contactwrap">
        <h1 className="contacth1">Contact Us</h1>
        <p className="contactp">Welcome to BoatVoyager! We're here to assist you with any inquiries, concerns, or booking assistance you may need. Your satisfaction is our top priority, and we are committed to providing excellent service. Please feel free to reach out to us through the following channels:</p>
        <h2 className="contacth2">Customer Support:</h2>
        <p className="contactp">Email: <a href="mailto:support@BoatVoyager.com" className='contacta'>support@BoatVoyager.com</a></p>
        <p className="contactp">Phone: +1-555-123-4567</p>
        <p className="contactp">Our dedicated customer support team is available to help you with any questions regarding your boat house booking, account assistance, or general inquiries. We strive to respond promptly to all emails and ensure a seamless booking experience for you.</p>
        <h2>Business Inquiries:</h2>
        <p className="contactp">For partnership opportunities, advertising, or any business-related queries, please contact our business development team at <a href="mailto:bizdev@BoatVoyager.com" className='contacta'>bizdev@BoatVoyager.com</a>. We are always open to collaboration and welcome new partnerships that align with our vision.</p>
        <h2>Address:</h2>
        <p className="contactp">Visit us at our main office located at:</p>
        <p className="contactp">[Your Company Name]<br/>
        [Street Address]<br/>
        [City, State, Zip Code]</p>
        <h2>Connect With Us:</h2>
        <p className="contactp">Stay updated on the latest news, promotions, and travel tips by following us on social media. Connect with us on:</p>
        <p className="contactp">Facebook: <a href="https://www.facebook.com/BoatVoyager" target="_blank" className='contacta'>facebook.com/BoatVoyager</a><br/>
        Twitter: <a href="https://twitter.com/BoatVoyager" target="_blank"className='contacta'>twitter.com/BoatVoyager</a><br/>
        Instagram: <a href="https://www.instagram.com/BoatVoyager" target="_blank" className='contacta'>instagram.com/BoatVoyager</a></p>

        <p className="contactp">Thank you for choosing BoatVoyager. We look forward to serving you and ensuring you have an unforgettable experience on the water!</p>
        <p className="contactp">Best Regards,</p>
        <p className="contactp">Boat Voyager</p>
        <h2>Feedback:</h2>
        <section style={{margin:"20px"}}>
        <form className='feedbackform'>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required className='feedbackinput'/>

            <label for="email" className='feedbacklabel'>Email:</label>
            <input type="email" id="email" name="email" required className='feedbackinput'/>

            <label for="rating" className='feedbacklabel'>Rating:</label>
            <select id="rating" name="rating" required className='feedbackinput'>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Very Good</option>
                <option value="3">3 - Good</option>
                <option value="2">2 - Fair</option>
                <option value="1">1 - Poor</option>
            </select>

            <label for="feedback" className='feedbacklabel'>Feedback:</label>
            <textarea id="feedback" name="feedback" required className='feedbacktextarea'></textarea>

            <button type="submit" className='feedbackbutton'>Submit Feedback</button>
        </form>
    </section>
        </div>
        </>
    )
}
export default ContactUs;
