import React from "react";

const BusinessSummary = () => {
  return (
    <div>
      <h2 className="text-center text-amber-400 text-xl mb-5">Business Summary</h2>
      <div class="stats stats-vertical lg:stats-horizontal shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
        <div class="stat">
          <div class="stat-title">Positive Seller Ratings</div>
          <div class="stat-value text-primary">95%</div>
        </div>

        <div class="stat">
          <div class="stat-title">Total Users</div>
          <div class="stat-value text-accent">2,700</div>
        </div>

        <div class="stat">
          <div class="stat-title">Ship On Time</div>
          <div class="stat-value text-secondary">98%</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
