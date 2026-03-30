import React from "react";
import './Contacts.css';

function Contacts(){
    return(
        <div className="contact">
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
      </div>
    );
}
export default Contacts;