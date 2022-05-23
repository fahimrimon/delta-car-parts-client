import React from "react";

const BusinessSummary = () => {
  return (
    <div className="mt-12">
      <h2 className="text-center text-amber-400 text-2xl mb-5">Business Summary</h2>
      <div class=" shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Total Products Sold</div>
          <div class="stat-value text-primary">12.7K</div>
          <div class="stat-desc">21% sell increase in the last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div class="stat-title">Ship On Time</div>
          <div class="stat-value text-accent">96%</div>
          <div class="stat-desc">97% on time shipping last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src="https://api.lorem.space/image/face?w=128&h=128" />
              </div>
            </div>
          </div>
          <div class="stat-value text-secondary">96%</div>
          <div class="stat-title">Positive Seller Ratings</div>
          <div class="stat-desc">5 star rating in the last month</div>
        </div>
      </div>
    </div>
  );
};
export default BusinessSummary;
