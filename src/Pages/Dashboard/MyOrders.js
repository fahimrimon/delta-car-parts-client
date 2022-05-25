import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const priceToInt = (s) => {
  let num = "";
  for (let ch of s) {
    if (ch >= "0" && ch <= "9") num += ch;
  }
  return parseInt(num);
};

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
      <h2 className="mt-3">
        <span className="text-xl text-secondary">My Order:</span> {orders.length}
      </h2>
      <div class="overflow-x-auto mt-12">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>EMAIL</th>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>PAYMENT</th>
              <th>ADDRESS</th>
              <th>DELETE ITEM</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.userEmail}</td>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>
                  {priceToInt(order.productPrice) * parseInt(order.quantity)}

                  <br />
                  <small>
                    <div class="badge badge-secondary badge-xs">Not Paid</div>
                  </small>
                </td>
                <td>{order.address}</td>
                <td>
                  <button class="btn btn-xs">REMOVE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
