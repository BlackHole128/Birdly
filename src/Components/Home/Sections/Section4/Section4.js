import React from "react";

const Section4 = () => {
  return (
    <div className="container mt-20 mb-10 p-16 ml-auto mr-auto">
      <h1 className="text-3xl font-semibold mt-10 mb-5 text-center">
        Our Commitments
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
        <article>
          <div className="card max-w-screen h-full">
            <figure className="px-10 pt-10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1791/1791961.png"
                alt="Shoes"
                className="rounded-xl h-24"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Authentic</h2>
            </div>
          </div>
        </article>
        <article>
          <div className="card max-w-screen h-full">
            <figure className="px-10 pt-10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8916/8916230.png"
                alt="Shoes"
                className="rounded-xl h-24"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Reliable</h2>
            </div>
          </div>
        </article>
        <article>
          <div className="card max-w-screen h-full">
            <figure className="px-10 pt-10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2226/2226178.png"
                alt="Shoes"
                className="rounded-xl h-24"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Neat and Clean</h2>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Section4;
