import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "./Art1.jpg";
import img2 from "./Art2.jpg";
import img3 from "./pot2.jpg";
import "./Slider.css";
// import img4 from "./4.png";
// import img5 from "./5.png";
// import img6 from "./6.png";
// import img7 from "./7.png";
// import img8 from "./8.png";

export const Slider = () => {
  const images = [
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img3,
    },
    // {
    //   url: img4,
    // },
    // {
    //   url: img5,
    // },
    // {
    //   url: img6,
    // },
    // {
    //   url: img7,
    // },
    // {
    //   url: img8,
    // },
  ];
  return (
    <div className="Slider">
      <SimpleImageSlider
        width={"100%"}
        height={"60vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay
      />
    </div>
  );
};
