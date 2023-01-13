import React, { useState } from "react";
import "./products.css";
import { SliderData } from "./sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";




import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

export const Products = ({ slides }) => {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      {SliderData.map((slide, index) => {
        return (
            <>
        {/* {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide current" : "slide"}
                key={index}
              > */}
                
                {index === current && (
                  <div>
                    <FaArrowAltCircleLeft
                  className="arrow prev"
                  onClick={prevSlide}
                />
                <FaArrowAltCircleRight
                  className="arrow next"
                  onClick={nextSlide}
                />
                    <img src={slide.image} alt="slide" className="image" />
                    <div className="content">
                      <h2>{slide.heading}</h2>
                      <p>
                        {slide.productId}
                        <br />
                        {slide.quantity}
                        <br />
                        {slide.price}
                      </p>
                    </div>
                  </div>
                )}
              {/* </div>
            );
          })}; */}
        </>
        )
      })}
    </div>
  );
};
