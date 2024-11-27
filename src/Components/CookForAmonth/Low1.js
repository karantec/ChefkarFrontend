import React from 'react';

const Lower = () => {
  return (
    <div>
      <section className="text-gray-600 w-[95rem] body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto max-w-none">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-96 object-cover object-center rounded"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FBest_cooks_to_serve_you_3876478f4c.webp&w=1920&q=75"
            />
            <div className="lg:w-1/2 bg-[#f1f1f1] w-full mt-20 lg:pl-10 lg:py-6 lg:mt-0">
              <h1 className="text-gray-900 text-6xl title-font font-bold mb-1">
                Discover your ideal cook from a team of over 4500 experts.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lower;
