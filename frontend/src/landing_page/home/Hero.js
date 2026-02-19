import React from "react";

function Hero() {
  return (
    <div className="page-wrapper">
    <div className="container-fluid p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1>Invest in everything</h1>
        <p className="pb-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.

        
        </p>
          
              <div className="d-flex justify-content-center mt-3">
                <button
               className="button px-5 py-2"
                
                >
                 Sign Up for free
                </button>
                </div>

        </div>
     
    </div>
    </div>
  );
}

export default Hero;