import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://powerful-beyond-98796.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section>
      <div>
        <h2 className="text-center text-amber-400 text-3xl mt-24 uppercase">Our Products</h2>
        <h4 className="text-center text-2xl mb-7">
          <small>
            All best seller product are now available for you and your can buy this product <br /> from here any time any where so
            sop now
          </small>
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
