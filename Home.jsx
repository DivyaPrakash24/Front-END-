import React from 'react';
import Product from './Product';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="hero"> 
        <div class="card bg-dark text-black border-0">
  <img class="card-img" src="/assets/4.jpg" alt="Background" height="550px"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center">
      {/* <div className="container">
      <h5 class="card-title display-3 fw-bolder mb-0">hello</h5>
    <p class="card-text lead fs-2"></p>
      </div> */}
    
  </div>
</div>
<Product/>
  <Footer />
        </div>
    );

}

export default Home;