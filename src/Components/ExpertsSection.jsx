import { ExpertsData } from "./Contant/ExpertsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExpertsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" max-w-[1000px] w-[80%] mx-auto px-4 ">
      <Slider {...settings}>
        {ExpertsData.map(({ id, image, description, name, title }) => (
          <div key={id} className="text-center m-auto w-[903px]">
            <img
              src={image}
              alt={name}
              className="rounded-full w-[103px] mx-auto"
            />
            <p className="text-2xl text-primary font-normal">{description}</p>
            <h4 className="text-xl text-primary font-semibold pt-20">{name}</h4>
            <p className="text-sm text-secondary font-normal">{title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExpertsSection;
