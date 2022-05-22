import React from "react";
import offer from "../../assets/images/offer.jpg"
const SpecialOffer = () => {
  return (
    <div>
      <div style={{
        background:`url(${offer})`
    }} className='bg-primary px-10 py-14 mt-20 '>
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-3xl font-bold">SPECIAL <span className="text-amber-400">OFFER</span> FOR NEW USER</h1>
            <h1 class="mb-5 text-4xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque
              aut repudiandae et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
