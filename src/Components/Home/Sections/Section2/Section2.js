import React from "react";

const Section2 = () => {
  return (
    <div className="container mt-20  ml-auto mr-auto p-40">
      <h1 className="text-3xl font-bold text-center mt-16 mb-10 insp-header">
        Birds make great pets
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <article className="my-auto">
          <p className="insp">
            Birds Are extremely intelligent, easy to train, and social. Being
            intelligent makes birds easier to train, than other animals. Since
            they are so smart, they're interesting to watch and be around. Their
            love of learning makes them fun to entertain and be entertained by.
            Birds can be great companions for senior citizens, only children, or
            petless households, and they can provide companionship and enjoyment
            for many years.
          </p>
        </article>
        <article>
          <img
            alt=""
            className="rounded-xl"
            src="https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_960_720.jpg"
          ></img>
        </article>
      </div>
    </div>
  );
};

export default Section2;
