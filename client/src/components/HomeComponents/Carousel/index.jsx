import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import ItemsCarousel from './../../ItemsCarousel';

export default function index() {
  return (
    <div className="carousel-div carousel">
      <h1>What's inside?</h1>
      <p>Have a look at some of the items you could win!</p>

      <ItemsCarousel />

      <p>Click below to see what our other members have won!</p>
      <Link to="/social/newsfeed" className="home-links" id="lone-link">
        Social Area
      </Link>
    </div>
  );
}
