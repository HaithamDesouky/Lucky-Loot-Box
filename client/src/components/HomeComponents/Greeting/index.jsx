import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <section className="greeting">
      <h1>LuckyLootBox</h1>
      <h3>
        Highly valued boxes filled with curated items ranging from video games
        consoles, t-shirts, memorabilla and much more!
        <br /> Scroll down to find out more!
      </h3>

      <Link to="/shop" className="home-links">
        Check out our amazing boxes here
      </Link>
    </section>
  );
}
