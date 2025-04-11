import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MultipleItems = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const images = [
    "/images/carousel-1.jpeg",
    "/images/carousel-2.jpeg",
    "/images/carousel-3.jpeg",
    "/images/carousel-4.jpeg",
    "/images/carousel-3.jpeg",
    "/images/carousel-2.jpeg",
  ];

  return (
    <div className="w-4/5 mx-auto my-10">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`slide-${index}`}
              className="rounded-lg  object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItems;



