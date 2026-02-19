import React from 'react';
function Hero() {
    return (
        <div className="page-wrapper">
          <div className="container ">
            <div className="row text-center m-5 p-5">
              <h1 className="pt-5" >
               Charges
              </h1>
              <p  className="text-muted pb-5 mb-5" style={{ fontSize: "2.1rem" }}>
                List of all charges and taxes
              </p>
              <div className='col-4 px-3 py-5 my-5'>
                <img src="media\images\pricingMF.svg"/>
                <h1>Free equity delivery</h1>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
              </div>
              <div className='col-4 px-3 py-5 my-5'>
                 <img src="media\images\pricing0.svg"/>
                <h1>Intraday and F&O trades</h1>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
              </div>
              <div className='col-4 px-3 py-5 my-5'>
                 <img src="media\images\pricingEquity.svg"/>
                <h1>Free direct MF</h1>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
              </div>
              
            </div>
          </div>
        </div>
      );
    }
  

export default Hero;