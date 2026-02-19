import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ order, closeSellWindow, setAllOrders, allOrders }) => {
  const [stockQuantity, setStockQuantity] = useState(order.qty || 1);
  const [stockPrice, setStockPrice] = useState(order.price || 0.0);
  const { closeSellWindow: contextCloseSellWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
     
      if (stockQuantity <= 0) {
        alert("Quantity must be greater than 0");
        return;
      }
      
      if (stockQuantity > order.qty) {
        alert(`You can't sell more than ${order.qty} shares`);
        return;
      }

      await axios.post("http://localhost:3002/newOrder", {
        name: order.name,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

     
      if (stockQuantity === order.qty) {
       
        const updatedOrders = allOrders.filter(o => o._id !== order._id);
        setAllOrders(updatedOrders);
      } else {
       
        const updatedOrders = allOrders.map(o => {
          if (o._id === order._id) {
            return {
              ...o,
              qty: o.qty - stockQuantity
            };
          }
          return o;
        });
        setAllOrders(updatedOrders);
      }

      closeSellWindow();
    } catch (error) {
      console.error("Error selling stock:", error);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="modal-overlay">
      <div className="container" id="sell-window">
        <h3>Sell {order.name}</h3>
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty. (Available: {order.qty})</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                min="1"
                max={order.qty}
                onChange={(e) => setStockQuantity(parseInt(e.target.value) || 0)}
                value={stockQuantity}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                min="0"
                onChange={(e) => setStockPrice(parseFloat(e.target.value) || 0)}
                value={stockPrice}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <button className="btn btn-blue" onClick={handleSellClick}>
              Sell
            </button>
            <button className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;