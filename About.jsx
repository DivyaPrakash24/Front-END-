import React from "react";
import '../styles/About.css';
import Footer from "./Footer";

const About = () => {
    return(
     <div>
       <div class="about-section">
          <h1>About Us </h1>
          <p>We are Ashtra Home Decorss . The idea originated with the intent to provide consumers a discovery platform with carefully curated lifestyle products . We are based in Karur and our goal has always been to provide a diverse yet curated range of products catered to different lifestyles and eliminate the need for Indian consumers to navigate various marketplaces or purchase items from international websites and deal with long delivery times . Our success is a direct result of happy customers who come back searching for more unique and creative products .</p>
      </div>
      <h2>Our Team</h2>
      <div class="row">
      <div class="column">
      <div class="card">
      <div class="container">
          <h2>Jane Doe</h2>
          <p class="title">CEO & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p><button class="button">Contact</button></p>
      </div>
      </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
<Footer />
     </div> 
    );
}

export default About;