import React from "react";
import BuckertGirl from "../../assets/images/bucketgirl.png";

const Landing = () => {
  return (
    <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <p className="text-xl">Best Quality</p>
          <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
          <p class="py-6 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            quo?
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
        <div className="h-[60vh] shrink-0">
          <img src={BuckertGirl} alt="" class="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
