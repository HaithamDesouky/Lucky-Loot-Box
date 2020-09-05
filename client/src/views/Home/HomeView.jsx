import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeView.scss';
import game from './game.png';
import movie from './movie.png';
import clothes from './clothes.png';
// import { listProducts } from '../services/product';

// import ProductItem from '../components/ProductItem';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: true,
      products: []
    };
  }

  render() {
    return (
      <div className="container">
        <div className="greeting">
          <h1>IronLootBox</h1>
          <h3>
            In every box you are guaranteed to win items that add to 2 times of
            the box price
          </h3>

          <Link to="/shop" className="home-links">
            Check out our amazing boxes here
          </Link>
        </div>

        <div className="second">
          <div className="items">
            <img src={game} alt="" /> Magnetic Katamari Damacy Figure
          </div>
          <div className="items">
            <img src={movie} alt="" />
            Aliens Pencil Sharpener
          </div>
          <div className="items">
            <img src={clothes} alt="" />
            Spider-Man T-shirt
          </div>
        </div>

        <div className="third">
          <Link to="/social/newsfeed" className="home-links" id="lone-link">
            See what other members won!
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeView;
