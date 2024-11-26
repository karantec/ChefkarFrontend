import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
         <h1 className="text-5xl text-center mt-5 font-bold">एक प्रमुख पहल</h1>
    
    <Slider {...settings}>
       
      <div >
        <img src="slider1.png" alt="Slide 1" />
      </div>
      <div>
        <img src="slider2.png" alt="Slide 2" />
      </div>
      <div>
        <img src="slider3.png" alt="Slide 3" />
      </div>
      <div>
        <img src="slider4.png" alt="Slide 4" />
      </div>
    </Slider>
    </div>
  );
}
