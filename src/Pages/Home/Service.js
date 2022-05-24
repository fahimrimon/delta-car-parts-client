import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../Shared/PrimaryButton";

const Service = ({ service }) => {
  const {_id, name, img, price, minquantity, totalquantity, description } = service;
  const navigate = useNavigate();

  const navigateToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl h-36 w-36" />
      </figure>
      <div class="card-body leading-4">
        <h2 class="card-title font-bold">{name}</h2>
        <p>{price}</p>
        <p><small><span className="font-bold">Minimum Order:</span> {minquantity}</small></p>
        <p><small><span className="font-bold">Available Items:</span> {totalquantity}</small></p>
        <p><small><span className="font-bold">Details:</span> {description}</small></p>
        <div class="card-actions flex justify-center mt-2">
          <span onClick={()=> navigateToProductDetail(_id)}><PrimaryButton>Buy Now</PrimaryButton></span>
        </div>
      </div>
    </div>
  );
};

export default Service;
