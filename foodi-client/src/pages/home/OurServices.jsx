import React from "react";

const OurServices = () => {
  return (
    <div className="section-container my-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Culinary Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>

            <button className="btn bg-green text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>

        {/* images */}
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
