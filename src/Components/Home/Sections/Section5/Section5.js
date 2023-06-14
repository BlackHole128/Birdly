import React from "react";

const Section5 = () => {
  return (
    <div className="container mt-20 mb-10 ml-auto mr-auto p-16">
      <h1 className="text-center text-3xl font-semibold mt-10 mb-10">
        Beauty Of Birds
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <article>
          <img
            src="https://images.unsplash.com/photo-1594524952992-0cddcede63dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            className="rounded-xl max-w-screen"
            alt=""
          />
        </article>
        <article className="my-auto">
            <p className="my-auto">We are often surrounded by nature’s symphonic bird song, yet don’t recognise it, nor often pay attention to it. Yet this beautiful wonder of life signals something that gets to the heart... </p>
        </article>
      </div>
    </div>
  );
};

export default Section5;
