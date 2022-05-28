import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3wGiCvnZufzekA4SQLnrZrwQtUIAcqEkSi8J2hh3RPRb6SNB55XYsKzOEW6AOpTDO5MptDGELmJur2sQv5sf3m00cKHi9fb1"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://powerful-beyond-98796.herokuapp.com/purchase/${id}`;
  const { data: order, isLoading } = useQuery(["purchase", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-secondary font-bold">Hello, {order.userName}</p>
          <h2 class="card-title">
            Your Product Name: <span className="text-red-400">{order.productName}</span>
          </h2>
          <p>Please pay: ${order.productPrice}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
