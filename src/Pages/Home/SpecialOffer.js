import React from "react";
import offer from "../../assets/images/offer.jpg";
const SpecialOffer = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${offer})`,
        }}
        className="bg-primary px-10 py-14 mt-20 "
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-2xl font-bold">
              SPECIAL <span className="text-amber-400">OFFER</span> FOR NEW USER
            </h1>
            <h1 class="mb-5 text-3xl font-bold">GET INSTANT DISCOUNT FOR MEMBERSHIP</h1>
            <p class="mb-5">Subscribe our newsletter and all latest news of our latest product, promotion and offers .</p>
            <input type="text" placeholder="Enter Your Email" class="input input-ghost  text-black w-full max-w-xs" /><button class="btn btn-outline btn-warning">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
