import { data } from "autoprefixer";

import React, { useState } from "react";

import Canvas from "../Canvas/Canvas";
import Prediction from "../Prediction/Prediction";
import Upload from "../Upload/Upload";
import Gsap from "../../../Shared/gsap animation/gsap";

//

/*
function uploadImage(img) {
        if (img) {
            errors.img = undefined
            setIsUploading(true)
            setImg("")
            setIsDisableButton(true)
            let imgData = new FormData()
            imgData.set('key', 'PLACE_YOUR_KEY')
            imgData.append('image', img)

            axios.post('https://api.imgbb.com/1/upload', imgData)
                .then(res => {
                    setImg(res.data.data.display_url);
                    setIsUploading(false)
                    setIsDisableButton(false)
                })
                .catch(error => console.log(error))
        }

    }
*/

const Classification = () => {
  const [src, setSrc] = useState("");
  const [file, setFile] = useState("");

  const [img, setImg] = useState([]);

  const [imgBB, setImgBB] = useState({});

  const [showClass, setShowClass] = useState(false);
  const [showImg, setShowImg] = useState(false);

  const handleChange = (e) => {
    let files = [];

    if (e.target.files.length !== 0) {
      const url = URL.createObjectURL(e.target.files[0]);

      setSrc(url);

      setFile(e.target.files[0]);
    }
  };

  const updateFunction = (img) => {
    const imgData = new FormData();
    imgData.set("key", "fdaec3ed0608d4178c14b5c74af92ecc");
    imgData.append("image", img);

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: imgData,
    })
      .then((res) => res.json())
      .then((data) => setImgBB(data));
  };
  const handleUpload = (e) => {
    e.preventDefault();
    console.log(file);
    updateFunction(file);
  };

  console.log(imgBB);

  const handleClassification = () => {
    console.log(imgBB);
    const ourUrl = imgBB?.data?.url;

    console.log(ourUrl);

    let imgData = {
      url: ourUrl,
    };

    fetch(`https://bird-shop-server-two.vercel.app/classification`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(imgData),
    })
      .then((res) => res.json())
      .then((data) => setImg(data));
  };

  const predediction = img[0];

  return (
    <div className="container ml-auto mr-auto p-16 mt-20 mb-16">
      <article className="mt-10 mb-10">
        <h2 className="text-xl font-bold text-center mt-16 mb-10">
          Uplaod Your Bird Image
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Upload onUpload={handleUpload} change={handleChange}></Upload>

          <Canvas image={src}></Canvas>
        </div>
      </article>

      <article className="mt-20 mb-10">

        <h2 className="text-xl font-bold text-center mt-16 mb-10">
          Classify Your Bird
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card max-w-screen bg-base-100 shadow-xl">

            <h2 className="text-xl font-bold text-center mt-10 mb-10">
              Bird needs to Classify
            </h2>
            <figure className="px-10 pt-10">
              <img src={src} className="rounded-xl" alt="" />
            </figure>
            <div className="card-body items-center text-center">
              <div className="">
                <button
                  className="btn btn-success mt-10 mb-5"
                  onClick={handleClassification}
                >
                  CLassify
                </button>
              </div>
            </div>
          </div>

          {img.length !== 0 ? (
            <Prediction prediction={img[0]}></Prediction>
          ) : <Gsap></Gsap>}
        </div>
      </article>
    </div>
  );
};

export default Classification;
