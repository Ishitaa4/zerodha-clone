import React from "react";
function LeftSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="page-wrapper">
      <div className="container pt-5 mt-5">
        <div className="row pt-5 mt-5">
          <div className="col-4 pt-4 mt-4 justify-align">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div className="mt-3 pt-3">
              {learnMore && (
                <a href="{learnMore} " target="blank" rel="noopener noreferrer">
                  Learn more
                </a>
              )}
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-7 ">
            <img src={imageURL} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
