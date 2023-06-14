import React from "react";

const Section1 = () => {
  return (
    <div className="max-w-screen max-h-screen mt-20 mb-10 max-w-screen">
    <h1 className="text-center text-3xl  mt-10 mb-5 font-semibold ">Our Inspiration</h1>
       <iframe
            className="max-w-screen"
            width="100%"
            height="80%"
            src="https://www.youtube.com/embed/ogeEY2q3_OU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
    </div>
  );
};

export default Section1;
