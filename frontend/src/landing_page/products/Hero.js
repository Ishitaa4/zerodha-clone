import React from "react";
function Hero() {
  return (
    <div className="page-wrapper">
      <div className="container border-bottom mb-5 pb-5">
        <div className="row text-center m-5 p-5">
          <h1 className="pt-5" style={{ fontSize: "3rem" }}>
            Zerodha Products
          </h1>
          <p style={{ fontSize: "2.1rem" }}>
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="fs-4 p-3">
            Check out our <a href="">investment offerings <i className="fa fa-long-arrow-right"></i></a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
