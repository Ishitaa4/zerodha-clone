import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SellActionWindow from "./SellActionWindow";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [showSellWindow, setShowSellWindow] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  const handleSellClick = (order) => {
    console.log("Sell clicked:", order);
    setSelectedOrder(order);
    setShowSellWindow(true);
  };

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <h3 className="title">Orders ({allOrders.length})</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>
                    <button
                      onClick={() => handleSellClick(order)}
                    >
                      Sell
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    
      {showSellWindow && selectedOrder && (
        <SellActionWindow
          order={selectedOrder}
          closeSellWindow={() => setShowSellWindow(false)}
          setAllOrders={setAllOrders}
          allOrders={allOrders}
        />
      )}
    </div>
  );
};

export default Orders;
