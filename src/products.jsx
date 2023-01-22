import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./products.css";
import { SliderData } from "./sliderData";

export const Products = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const imagePerRow = 6;

  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

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
    <>
      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={4}>
          {SliderData?.slice(0, next)?.map((slide, index) => {
            return (
              <>
                <Grid item key={slide} xs={12} sm={6} md={4}>
                  <div key={index === current ? "slide current" : "slide"}>
                    <img className="image" src={slide.image} />

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {slide.productId}
                      </Typography>
                      <Typography>{slide.quantity}</Typography>
                      <Typography>{slide.price}</Typography>
                    </CardContent>
                  </div>
                </Grid>
              </>
            );
          })}
        </Grid>
        {next < slides?.length && (
          <Button className="load-more-btn" onClick={handleMoreImage}>
            Load more
          </Button>
        )}
      </Container>
    </>
  );
};