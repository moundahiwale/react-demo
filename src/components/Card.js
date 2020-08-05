import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../services/orderService';
import './Card.scss';

const Card = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const orders = await fetchOrders();
      setOrders(orders);
    };
    getOrders();
  }, []);

  return (
    <>
      <h1>Cards</h1>
      <div className="container">
        {orders.map((order) => (
          <div key={order.id} className="card">
            <div>
              <label>Customer Name:</label> {order.customer_name}
            </div>
            <div>
              <label>Order Total:</label> {order.total}
            </div>
            <div>
              <label>Order Date:</label> {order.date}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
