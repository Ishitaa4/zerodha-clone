import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const renderTable = () => {
    switch (activeTab) {
      case "equity":
        return (
          <table className="table text-center align-middle">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Equity Delivery</th>
                <th>Equity Intraday</th>
                <th>F&amp;O - Futures</th>
                <th>F&amp;O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on sell side</td>
                <td>0.02% on sell side</td>
                <td>
                  <ul className="list-unstyled mb-0 text-start">
                    <li>0.125% of the intrinsic value on exercised options</li>
                    <li>0.1% on sell side (premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                <td>NSE: 0.00173% <br /> BSE: 0</td>
                <td>
                  NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.015% or ₹1500 / crore</td>
                <td>0.003% or ₹300 / crore</td>
                <td>0.002% or ₹200 / crore</td>
                <td>0.003% or ₹300 / crore</td>
              </tr>
            </tbody>
          </table>
        );

      case "currency":
        return (
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Currency futures</th>
                <th>Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>NSE: 0.00035% <br /> BSE: 0.00045%</td>
                <td>NSE: 0.00035% <br /> BSE: 0.00045%</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        );

      case "commodity":
        return (
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Commodity futures</th>
                <th>Commodity options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>MCX: 0.0021% <br /> NSE: 0.0001%</td>
                <td>MCX: 0.0418% <br /> NSE: 0.001%</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>8% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>Agri: ₹1 / crore <br /> Non-agri: ₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        );

      default:
        return null;
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container my-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
              style={{ fontSize: "2.5rem" }}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("equity");
              }}
            >
              Equity
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
              style={{ fontSize: "2.5rem" }}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("currency");
              }}
            >
              Currency
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
              style={{ fontSize: "2.5rem" }}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("commodity");
              }}
            >
              Commodity
            </a>
          </li>
        </ul>

        <div className="mt-4">{renderTable()}</div>

        {activeTab === "equity" && (
          <div className="d-flex align-items-center">
            <p className="mx-auto py-4 fs-2">
              Calculate your costs upfront using our brokerage calculator
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Brokerage;
