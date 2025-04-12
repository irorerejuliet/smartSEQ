import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArticleData } from "./Contant/ArticlesData";

const LatestArticle = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-40 px-6 md:px-20">
        <div className="text-center mb-10">
          <p className="text-sm text-primary font-medium">Our Blog</p>
          <h2 className="text-[2.5rem] text-primary font-semibold">
            Latest Articles
          </h2>
        </div>

        <Slider {...settings}>
          {ArticleData.map((article, index) => (
            <div key={index} className="p-4">
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className=" object-cover"
                />
                <div className="p-4">
                  <img src="" alt="" />
                  <h3 className="text-lg font-semibold text-primary">
                    {article.title}
                  </h3>
                  <p className="text-primary font-medium text-[1.625rem]">
                    {article.description}
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">{article.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default LatestArticle;
