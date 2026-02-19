import React from "react";
function Universe() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="row text-center m-5 p-5">
          <h1 >The Zerodha Universe</h1>
          <p className="pb-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="col-4 p-5 ">
            <img
              className="p-4"
              src="media\images\zerodhaFundhouse.png"
              style={{ width: "150px", height: "auto" }}
            />
            <p className="text-muted text-small p-3">
              Or asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5 ">
            <img
              className="p-4"
              src="media\images\sensibullLogo.svg "
              alt="Sensibull"
              style={{ width: "180px", height: "auto" }}
            />
            <p className="text-muted text-small p-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              className="p-1"
              src="media\images\tijori-logo.png"
              style={{ width: "140px", height: "auto" }}
            />
            <p className="text-muted text-small p-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row text-center mx-5 px-5">
          <div className="col-4 p-5">
            <img
              className="p-1"
              src="media\images\streakLogo.png"
              style={{ width: "180px", height: "auto" }}
            />
            <p className="text-muted text-small p-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              className="p-1"
              src="media\images\smallcaseLogo.png"
              style={{ width: "180px", height: "auto" }}
            />
            <p className="text-muted text-small p-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-5">
            <img
              className="p-1"
              src="media\images\dittoLogo.png"
              style={{ width: "100px", height: "auto" }}
            />
            <p className="text-muted text-small p-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
         <div className="d-flex justify-content-center pb-5  mb-5 ">
                <button
               className="button px-5 py-2"
                
                >
                 Sign Up for free
                </button>
                </div>
      </div>
    </div>
  );
}

export default Universe;
