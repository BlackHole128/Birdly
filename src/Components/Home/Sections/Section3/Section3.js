import React from "react";

const Section3 = () => {
  return (
    <div className="container mt-20 ml-auto p-16">
    <h1 className="text-3xl text-center font-semibold mt-10 mb-5">Quotes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <article>
          <div className="card max-w-screen h-full shadow-xl p-5">
            <div className="card-body text-center">
              <h2 className="text-center text-2xl font-bold">Claude Monet</h2>
              <p>I would like to paint the way a bird sings</p>
              
            </div>
          </div>
        </article>
        <article>
          <div className="card max-w-screen h-full shadow-xl p-5">
            <div className="card-body text-center">
              <h2 className="text-center text-2xl font-bold">Mehmet Murat Ildan</h2>
              <p>Wherever there are birds, there is hope.</p>
              
            </div>
          </div>
        </article>
        <article>
          <div className="card max-w-screen shadow-xl p-5">
            <div className="card-body text-center">
              <h2 className="text-center text-2xl font-bold"> J.M. Barrie</h2>
              <p>The reason birds can fly and we can't is simply that they have perfect faith, for to have faith is to have wings.</p>
              
            </div>
          </div>
        </article>
       
       
 
      </div>
    </div>
  );
};

export default Section3;
