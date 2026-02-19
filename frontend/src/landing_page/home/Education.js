import React from 'react';

function Pricing() {
    return ( 
        <div className='page-wrapper'>
    <div className="container-fluid mt-5 pt-5">
        <div className="row">
          <div className='col-6'>
           <img src="media/images/education.svg"/>
            </div>
            <div className='col-6'>
                <h1>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" style={{ textDecoration: "none" }}>
              Varsity {" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" style={{ textDecoration: "none" }}>
              Trading Q&A {" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            </div>
            </div> 
            </div>
            
    </div> );
}

export default Pricing;