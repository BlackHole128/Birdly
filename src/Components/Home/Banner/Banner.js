import React from "react";

const Banner = () => {
  return (
    <section className="banner-container">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full slide1">
          <article className="text-center mx-auto text-white">
            <div className="hero min-h-screen">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Welcome To Birdly</h1>
                  <h2 className="text-2xl font-semibold mt-5 mb-5">An E-Commerce shop for Birds</h2>
                  <p className="py-6">
                  “I would like to paint the way a bird sings.” 
                    <p className="text-right qoutes">— Claude Monet</p>
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </article>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full slide2">
          
        <article className="text-center mx-auto text-white">
            <div className="hero min-h-screen">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Welcome To Birdly</h1>
                  
                  <h2 className="text-2xl font-semibold mt-5 mb-5">An E-Commerce shop for Birds</h2>
                  <p className="py-6">
                  "Wherever there are birds, there is hope." 
                  <p className="text-right qoutes">― Mehmet Murat Ildan</p>
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </article>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full slide3">
          
        <article className="text-center mx-auto text-white">
            <div className="hero min-h-screen">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Welcome To Birdly</h1>
                  
                  <h2 className="text-2xl font-semibold mt-5 mb-5">An E-Commerce shop for Birds</h2>
                  <p className="py-6">
                  "The reason birds can fly and we can't is simply that they have perfect faith, for to have faith is to have wings."  <p className="text-right qoutes">- J.M. Barrie</p>
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </article>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full slide4">
        <article className="text-center mx-auto text-white">
            <div className="hero min-h-screen">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Welcome To Birdly</h1>
                  
                  <h2 className="text-2xl font-semibold mt-5 mb-5">An E-Commerce shop for Birds</h2>
                  <div className="py-6">
                  <p>"A heart without dreams is like a bird without feathers."</p> <p className="text-right qoutes">— Suzy Kassem</p>
                  </div>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </article>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
