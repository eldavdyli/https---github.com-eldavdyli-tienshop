import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { slides } from '../data/slides';

function Slider() {
  return (
    <Carousel>
      {slides &&
        slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Image
              src={slide.image}
              alt={slide.title}
              style={{ width: '100%', height: 'auto' }} 
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default Slider;


