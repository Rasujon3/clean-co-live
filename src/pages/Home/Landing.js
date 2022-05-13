import React from "react";
import BuckertGirl from "../../assets/images/bucketgirl.png";

const Landing = () => {
  return (
    <>
      <div class="hero h-screen lg:h-[60vh] bg-accent z-0 mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-xl"
            >
              Best Quality
            </p>
            <h1
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="400"
              class="text-5xl font-bold"
            >
              Professional Cleaning Service
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="600"
              class="py-6 max-w-xl"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, quo?
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1300"
              class="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img data-aos="fade-left" src={BuckertGirl} alt="" class="h-full" />
          </div>
        </div>
      </div>
      <div className="rounded-2xl z-20 mx-auto mt-[-50px] relative bg-base-200 shadow-lg p-10 w-5/6">
        <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary mt-5">Get a Quote</button>
      </div>
    </>
  );
};

export default Landing;
