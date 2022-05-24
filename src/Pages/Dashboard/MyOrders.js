import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/purchase?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return (
    <div>
      <h2 className="mt-3">My Order: {orders.length}</h2>
      <div class="overflow-x-auto mt-12">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>EMAIL</th>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>PAYMENT</th>
              <th>DELETE ITEM</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <th>1</th>
                <td>{order.userEmail}</td>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>payment</td>
                <td>cencel</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
