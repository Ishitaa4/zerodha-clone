import React from "react";
function Charges() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="row p-5 m-3">
          <h1>Charges for account opening</h1>
          <table className="table text-start align-middle py-5">
            <thead className="table-light">
              <tr>
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tr>
              <td>Online account</td>
              <td></td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td></td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </table>
        </div>
        <div className="row p-5 m-3">
          <h1>Demat AMC (Annual Maintenance Charge)</h1>
          <table className="table text-start align-middle py-5">
            <thead className="table-light">
              <tr>
                <th>Value of holdings</th>
                <th> AMC</th>
              </tr>
            </thead>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td></td>
            </tr>
            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quartlerly</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quartlerly</td>
            </tr>
          </table>
          <p className="fs-6">
            * Lower AMC is applicable only if the account qualifies as a Basic
            Services Demat Account (BSDA). BSDA account holders cannot hold more
            than one demat account. To learn more about BSDA, <br/><a href="">click here</a>
          </p>
        </div>
        <div className="row p-5 m-3">
          <h1>Demat AMC (Annual Maintenance Charge)</h1>
          <table className="table text-start align-middle py-5">
            <thead className="table-light">
              <tr>
                <th>Service</th>
                <th> Billing Frquency</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Historical: 500</td>
            </tr>
          </table>
          <p className="fs-6">
            * Lower AMC is applicable only if the account qualifies as a Basic
            Services Demat Account (BSDA). BSDA account holders cannot hold more
            than one demat account. To learn more about BSDA, <br/><a href="">click here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Charges;
