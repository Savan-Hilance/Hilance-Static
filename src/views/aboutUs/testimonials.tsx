import React, { useState } from "react";
import kaweku from "../../assets/images/kaweku.png";
import ampomah from "../../assets/images/ampomah.png";
import subscribeBG from "../../assets/images/subscribeBG.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "@mui/material";
import Slider from "react-slick";

const Testimonials = () => {
  const [value, setValue] = useState<number | null>(2);

  const testimonials = [
    {
      img: kaweku,
      name: "Kweku Annan",
      role: "CEO & Founder, Tech Innovators Inc",
      description:
        "Hillance transformed our vision into a reality with an intuitive app that perfectly serves our users. Their attention to detail and commitment to quality have been outstanding. Our team has received tremendous feedback, and we couldn’t be happier with the result! ",
    },
    {
      img: ampomah,
      name: "Ama Ampomah",
      role: "Product Designer, Digital Solutions Co",
      description:
        "Working with Hilance was a seamless experience. Their design team truly understands user-centric design, and the developers delivered a product that performs exceptionally well across devices. Highly recommended! ",
    },
    {
      img: kaweku,
      name: "John Doe",
      role: "Founder, Startup Lab",
      description:
        "The Hilance team went above and beyond to develop an app that stands out in our industry. They kept us informed every step of the way and delivered on time. Their expertise in mobile app development is impressive! ",
    },
    {
      img: ampomah,
      name: "Ama Ampomah",
      role: "Product Designer, Digital Solutions Co",
      description:
        "Working with Hilance was a seamless experience. Their design team truly understands user-centric design, and the developers delivered a product that performs exceptionally well across devices. Highly recommended! ",
    },
    {
      img: kaweku,
      name: "Kweku Annan",
      role: "CEO & Founder, Tech Innovators Inc",
      description:
        "Hillance transformed our vision into a reality with an intuitive app that perfectly serves our users. Their attention to detail and commitment to quality have been outstanding. Our team has received tremendous feedback, and we couldn’t be happier with the result! ",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="mt-5 md:mt-20 pt-0 md:pt-10 pb-5"
      style={{ backgroundColor: "rgb(240, 240, 240)" }}
    >
      <h3 className="text-center text-bglburegistrationbanner tracking-[0.2em]">
        Testimonials
      </h3>
      <p className="text-center pb-4 font-semibold text-lg sm:text-xl md:text-2xl">
        What our clients say
      </p>

      <div className="flex justify-center my-8">
        <Slider
          {...settings}
          className="w-full md:w-[46rem] lg:w-[57rem] xl:w-[67rem]"
        >
          {testimonials.map((testimonial, index) => {
            const isCenterSlide = index === currentSlide;
            return (
              <div
                key={index}
                className={`w-96 text-center py-3 transform transition-transform duration-500 ease-in-out bg-white ${
                  isCenterSlide
                    ? "opacity-100 scale-100"
                    : "scale-90 blur-[3px]"
                }`}
              >
                <div className="flex justify-center">
                  <img
                    src={testimonial.img}
                    className="rounded-full w-24 h-24 object-cover"
                    alt="Not Found"
                  />
                </div>
                <div className="flex justify-center my-4">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
                <p className="text-center px-1">{testimonial.description}</p>
                <p className="text-sm pt-3 text-black font-bold">{testimonial.name}</p>
                <p className="text-sm font-bold">{testimonial.role}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
