import React from "react";
import profile from "../../assets/images/profile.JPG";
const Portfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen grid grid-cols-1">
        <div class="hero-content flex-col lg:flex-row lg:space-x-36">
          <img src={profile} class="max-w-sm rounded-lg shadow-2xl " />
          <div>
            <h1 class="text-5xl font-bold">Fahim Rimon</h1>
            <p className="mt-2 mb-5">
              UI/UX Designer and Web or <span className="text-red-400">Application Developer</span>
            </p>
            <p>
              I am Rimon, an web developer, and a creative designer with over 2 years of experience. I do web development that
              offers a wide range of services, but not limited to, including figma design into react, android app development,
              using react-native, and many more. I also design the UI/UX of websites. Feel free to reach out to me so we can start
              planning your next project.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h2 className="text-center bg-base-200 p-5 text-4xl uppercase rounded mb-9">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center mb-5">
          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">City University</h2>
              <div>
                <p>Bechelor of Science in Computer Engineering</p>
                <p>City University</p>
                <p>Savar, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">Programming Hero</h2>
              <div>
                <p>Learn Web Design & Development</p>
                <p>(JS, React, Node, Firebase, Mongodb)</p>
                <p>Front-end Developer</p>
                <p>Back-end Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* design skilss */}
      <div className="mt-12 mb-12">
        <h2 className="text-center bg-base-200 p-5 text-4xl uppercase rounded mb-9 ">Design Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center mb-5">
          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">HTML, CSS & BOOTSTRAP</h2>
              <div>
                <p className="mb-2">I will design any website using html, css & Bootstrap.</p>
                <p className="mb-3">Coding skills:</p>
                <input type="range" min="0" max="100" value="100" class="range range-secondary" step="25" />
                <div class="w-full flex justify-between text-xs px-2">
                  <span>30%</span>
                  <span>50%</span>
                  <span>80%</span>
                  <span>90%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">JavaScript</h2>
              <div>
                <p className="mb-2">I will design any website using JavaScript.</p>
                <p className="mb-3">Coding skills:</p>
                <input type="range" min="0" max="100" value="75" class="range range-secondary" step="25" />
                <div class="w-full flex justify-between text-xs px-2">
                  <span>30%</span>
                  <span>50%</span>
                  <span>80%</span>
                  <span>95%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">React with Firebase</h2>
              <div>
                <p className="mb-2">I will design and Develop any website using React and Firebase for authentication.</p>
                <p className="mb-3">Coding skills:</p>
                <input type="range" min="0" max="100" value="75" class="range range-secondary" step="25" />
                <div class="w-full flex justify-between text-xs px-2">
                  <span>30%</span>
                  <span>50%</span>
                  <span>80%</span>
                  <span>95%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">Mongodb</h2>
              <div>
                <p className="mb-2">I will design and Develop any website using React and implement Back-end using Mongodb.</p>
                <p className="mb-3">Coding skills:</p>
                <input type="range" min="0" max="100" value="75" class="range range-secondary" step="25" />
                <div class="w-full flex justify-between text-xs px-2">
                  <span>30%</span>
                  <span>50%</span>
                  <span>80%</span>
                  <span>95%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-24 text-center">
        <div class="stat place-items-center">
          <div class="stat-title">Happy Clients</div>
          <div class="stat-value">25+</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Project Complete</div>
          <div class="stat-value text-secondary">30+</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Years of Experinces</div>
          <div class="stat-value">2+</div>
        </div>
      </div>

      <div className="my-12">
          <h2 className="text-xl text-red-400 mb-3">My Three Live Project Link:</h2>
          <p>1. <a className="link link-secondary" href="https://bike-warehouse-284a2.web.app/">Bike Warehouse react live site</a></p>
          <p>2. <a className="link link-secondary" href="https://photography-212d6.web.app/">Luxary Photography react live site</a></p>
          <p>3. <a className="link link-secondary" href="https://cute-praline-87c8d6.netlify.app/">Star Shop react live site </a></p>
      </div>

      <div className="mt-12 mb-12">
        <div class="card w-full bg-base-100 shadow-xl border-2 border-gray-200">
          <div class="card-body">
            <h2 class="card-title justify-center text-2xl">CONTACT ME</h2>
            <div className="grid justify-center mt-5">
            <p><span className="text-secondary">NAME:</span> Fahim Rimon</p>
            <p><span className="text-secondary">RESIDENCE:</span> Bangladesh</p>
            <p><span className="text-secondary">ADDRESS:</span> Nagarpur, Tangail, Dhaka</p>
            <p><span className="text-secondary">EMAIL:</span> fahimrimon21@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
