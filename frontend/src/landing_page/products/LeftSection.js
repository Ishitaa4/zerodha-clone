import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
  <div className="page-wrapper">
  <div className="container pb-5 mb-5 ">
    <div className="row pt-5 pb-5">
        <div className="col-6 p-3">
            <img src={imageURL}/>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5 justify-align">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div className="mt-3">
            {tryDemo && <a href={tryDemo}>Try Demo</a>}
            {learnMore && <a href="{learnMore} "style={{marginLeft:"50px"}}  target="_blank" rel="noopener noreferrer">Learn more</a>}
            </div>
            <a href={googlePlay}><img src="media\images\googlePlayBadge.svg"/></a>
            <a href={appStore}><img src="media\images\appstoreBadge.svg"style={{marginLeft:"50px"}}/></a>
        </div>
        </div>
        </div>
  </div>
  );
}

export default LeftSection;
