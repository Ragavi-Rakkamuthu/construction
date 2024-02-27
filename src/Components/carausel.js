import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Carausel() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='car-panel'>
      <Carousel.Item>
        <img src="/dis1.jpg" alt='image'></img>
        <Carousel.Caption>
          <h3>BUILT THE FUTURE</h3>
          <p>BECOME A PIECE OF ART WHEN MEETS WITH INSPIRATION</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/dis2.jpg" alt='image'></img>
        <Carousel.Caption>
          <h3>WAY IN BUILDIG</h3>
          <p>CONSTRUCTOR & CONSTRUCTION</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/dis3.jpg" alt='img'></img>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>COMPLEX PROJECTS</h3>
          <p>
          IMPLEMENT CUTTING-EDGE TECHNOLOGY IN CONSTRUCTIONS
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  );
  
}

export default Carausel
