import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="mt-5 flex text-xl items-center text-accent-400 border-solid border-2 rounded-lg border-indigo-600 p-5">
        <div>
          <h2 className="">
            Q-1: How does prototypical inheritance work?
          </h2>
        </div>
        <div>
          <label htmlFor="my-modal-1" class="btn modal-button ml-5">
            Ans
          </label>
          <input type="checkbox" id="my-modal-1" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative">
              <label htmlFor="my-modal-1" class="btn btn-sm btn-circle absolute right-2 top-2">
                ✕
              </label>
              <h3 class="text-lg font-bold text-secondary">How does prototypical inheritance work?</h3>
              <p class="py-4">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
              <p>Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-5 flex text-xl items-center text-accent-400 border-solid border-2 rounded-lg border-indigo-600 p-5">
        <div>
          <h2 className="">
            Q-2: What are the different ways to manage a state in a React application?
          </h2>
        </div>
        <div>
          <label htmlFor="my-modal-2" class="btn modal-button ml-5">
            Ans
          </label>
          <input type="checkbox" id="my-modal-2" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative">
              <label htmlFor="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">
                ✕
              </label>
              <h3 class="text-lg font-bold text-secondary">What are the different ways to manage a state in a React application?</h3>
              <p class="py-4">There are four main types of state you need to properly manage in your React apps:</p>
              <p><span className="font-bold">1. Local state:</span> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.</p>
              <p><span className="font-bold">2. Global state:</span> Global state is data we manage across multiple components.</p>
              <p><span className="font-bold">3.Server state:</span> Data that comes from an external server that must be integrated with our UI state.</p>
              <p><span className="font-bold">4.URL state:</span> Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex text-xl items-center text-accent-400 border-solid border-2 rounded-lg border-indigo-600 p-5">
        <div>
          <h2 className="">
            Q-3: How will you improve the performance of a React Application?
          </h2>
        </div>
        <div>
          <label htmlFor="my-modal-3" class="btn modal-button ml-5">
            Ans
          </label>
          <input type="checkbox" id="my-modal-3" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative">
              <label htmlFor="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">
                ✕
              </label>
              <h3 class="text-lg font-bold text-secondary">How will you improve the performance of a React Application?</h3>
              <p class="py-4">There are five way to Optimizing performance in a React application?</p>
              <p>1. Keeping component state local where necessary.</p>
              <p>2. Memoizing React components to prevent unnecessary re-renders.</p>
              <p>3. Code-splitting in React using dynamic import.</p>
              <p>4. Windowing or list virtualization in React.</p>
              <p>5. Lazy loading images in React.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex text-xl items-center text-accent-400 border-solid border-2 rounded-lg border-indigo-600 p-5">
        <div>
          <h2 className="">
            Q-4: What is a unit test? Why should write unit tests?
          </h2>
        </div>
        <div>
          <label htmlFor="my-modal-4" class="btn modal-button ml-5">
            Ans
          </label>
          <input type="checkbox" id="my-modal-4" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative">
              <label htmlFor="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">
                ✕
              </label>
              <h3 class="text-lg font-bold text-secondary">What is a unit test? Why should write unit tests?</h3>
              <p class="py-4 font-bold">What is unit testing in React?</p>
              <p className="mb-2">Unit testing is a testing method that tests an individual software unit in isolation.</p>
              <p className="font-bold mb-2">Why should write unit tests?</p>
              <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex text-xl items-center text-accent-400 border-solid border-2 rounded-lg border-indigo-600 p-5">
        <div>
          <h2 className="">
            Q-5: Why you do not set the state directly in React?
          </h2>
        </div>
        <div>
          <label htmlFor="my-modal-5" class="btn modal-button ml-5">
            Ans
          </label>
          <input type="checkbox" id="my-modal-5" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative">
              <label htmlFor="my-modal-5" class="btn btn-sm btn-circle absolute right-2 top-2">
                ✕
              </label>
              <h3 class="text-lg font-bold text-secondary">Why you do not set the state directly in React.</h3>
              <p class="py-4">React probably knows that we should never change or update the state directly. In React, whenever a component is rendering either in theMounting phase or in Updating Phase, it always renders all the components that are in its tree.</p>
              <p>If you try to update state directly then it won't re-render the component.</p>
              <p><span className="font-bold">Wrong:</span> Instead use setState method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering. Example: this.state.message = 'Hello world'</p>
              <p><span className="font-bold">Correct:</span> You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax. Example: this.setState message: 'Hello World'</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Blogs;
