import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
const Banner = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img src={banner1} class="max-w-sm rounded-lg shadow-2xl" alt="" />
              <div>
                <h1 class="text-5xl font-bold">
                  LATEST & POWERFUL <br /> ENGINE FOR YOU
                </h1>{" "}
                <br />
                <PrimaryButton>Shop Now</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" class="carousel-item w-full">
          <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img src={banner2} class="max-w-sm rounded-lg shadow-2xl" alt="" />
              <div>
                <h1 class="text-5xl font-bold">
                  GET &250 IN TOTAL <br /> DISCOUNT ON A NEW <br /> SET OF TIRES
                </h1>
                <br />
                <PrimaryButton>Shop Now</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" class="carousel-item w-full">
          <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img src={banner3} class="max-w-sm rounded-lg shadow-2xl" alt="" />
              <div>
                <h1 class="text-5xl font-bold">
                  LATEST & BEAUTY <br />
                  HEADLIGHTS
                </h1>
                <br />
                <PrimaryButton>Shop Now</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2 ">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
