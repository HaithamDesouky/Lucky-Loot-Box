import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import game from './game.png';
import movie from './movie.png';
import clothes from './clothes.png';
import portablegame from './nintendo.png';
import controller from './controller.png';
import cyclops from './cyclops.png';
import bond from './bond.png';

function ItemsCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay showIndicators={false}>
        <div>
          <img id="carousel-image" src={game} alt="" />
          <p>Damacy Figure</p>
        </div>
        <div>
          <img id="carousel-image" src={movie} alt="" />
          <p>Aliens Pencil Sharpener</p>
        </div>
        <div>
          <img id="carousel-image" src={clothes} alt="" />
          <p>Spider-Man T-shirt</p>
        </div>
        <div>
          <img id="carousel-image" src={portablegame} alt="" />
          <p>Portable Video Game Console</p>
        </div>
        <div>
          <img id="carousel-image" src={controller} alt="" />
          <p>Game Controller</p>
        </div>
        <div>
          <img id="carousel-image" src={bond} alt="" />
          <p>Replica James Bond Aston Martin</p>
        </div>
        <div>
          <img id="carousel-image" src={cyclops} alt="" />
          <p>X-Men Memorabilla</p>
        </div>
      </Carousel>
    </div>
  );
}

export default ItemsCarousel;

{
  /* <Carousel id="carousel-component">
          <div>
            <img id="carousel-image" src={game} alt="" />
            <p>Damacy Figure</p>
          </div>
          <div>
            <img id="carousel-image" src={movie} alt="" />
            <p>Aliens Pencil Sharpener</p>
          </div>
          <div>
            <img id="carousel-image" src={clothes} alt="" />
            <p>Spider-Man T-shirt</p>
          </div>
          <div>
            <img id="carousel-image" src={portablegame} alt="" />
            <p>Portable Video Game Console</p>
          </div>
          <div>
            <img id="carousel-image" src={figurine} alt="" />
            <p> Anime Figurines</p>
          </div>
          <div>
            <img id="carousel-image" src={tamagotchi} alt="" />
            <p> Classic Tamagotchi Games</p>
          </div> */
}
