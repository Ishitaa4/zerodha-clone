import React from 'react';
function Hero() {
    return (
    <section className="container-fluid" id="supportHero">
      <div className="row px-5 pt-5 " id="supportWrapper">
        
            <div className='col-6'>
        <h4 className="fs-2 px-5 mx-5">Support Portal</h4>
        </div>
        <div className='col-6'>
        <a className="mx-4 "href="" >Track Tickets</a>
         
        </div>
       
      </div>
       <div className=" row " id="heroText" >
         <div className="col-6 p-5 " >
            <h1 className='fs-3'>Search for an answer or browser help topics to create a ticket</h1>
                <form>
                    <input
                    type="text"
                    className='fs-5'
                     placeholder="Eg  how do I activate F&O" /> <br/>
                </form>
               <a href="" style={{marginLeft:"10px"}}>Track account Opening</a>
                <a href=""style={{marginLeft:"10px"}}>Track Segment activation</a>
                <a href=""style={{marginLeft:"10px"}}>Intraday margins</a>
                <a href=""style={{marginLeft:"10px"}}>Kite user manual</a>
         </div>
         <div className="col-6 p-5 " >
            <h1 className='fs-3'>Featured</h1>
            <ol>
            <li><a href="">Current Takeovers and Delistings-January 2024</a></li>
            <li><a href="">Latest Intraday leverages-MIS & CO</a></li>
            </ol>
         </div>
       
       
      </div>
    </section>  );
}

export default Hero;