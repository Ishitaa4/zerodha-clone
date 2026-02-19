import React from "react";
function Team() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="row pb-5 ">
          <h1
            className=" text-center"
            style={{ color: "#424242", fontSize: "2 rem", padding: "0px 100px",
            }}
          >
            People
          </h1>
        </div>
          
        <div
          className="row p-5 m-3 "
          style={{lineHeight:"1.8",fontSize:"2.5em"}}>
            <div className=" col-5 text-center text-muted">
            <img src="media\images\nithinKamath.jpg"style={{borderRadius:"100%", width:"70%"}}/>
            <h3 className="mt-5">Nithin Kamath</h3>
            <h4 >Founder, CEO</h4>
          </div>
          <div className="col-7 p-2">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on <a style={{textDecoration:"none"}}href="">Homepage</a> /<a  style={{textDecoration:"none"}}href=""> TradingQnA </a>/{" "}
              <a style={{textDecoration:"none"}} href="">Twitter</a>
            </p>
          </div>
          
      </div>
      </div>
    </div>
  );
}

export default Team;
