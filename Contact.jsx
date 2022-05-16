import React ,{ useState } from "react";
import Four from "../assets1/4.jpg";
import '../styles/Contact.css';
import Footer from "./Footer";

const Contact = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleOnSubmit = async (e) => {

      var data = JSON.stringify({"name": name , "email": email , "message": message });
      debugger
      const response = await fetch(
        'http://localhost:5000/contact', {
          method: "POST",
          body: data,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const result = await response.json();
        console.log(result) ;
    }
    return(
      <div>
      <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Four})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form action="">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="message">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="6"
            placeholder="Enter message..."
            name="message"  
            required
          ></textarea>
          <button type="submit" onClick={handleOnSubmit}> Send Message</button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
    );
}

export default Contact;