import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeView.scss';

import { render } from 'react-dom';
import ItemsCarousel from '../../components/ItemsCarousel';
import coins from './treasurechest.png';
import './HowItWorksSection.scss';

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
        <section className="greeting">
          <h1>LuckyLootBox</h1>
          <h3>
            In every box you are guaranteed to win items that add to 2 times of
            the box price
          </h3>

          <Link to="/shop" className="home-links">
            Check out our amazing boxes here
          </Link>
        </section>
        <div id="section-header">
          <h1>How does it work?</h1>
        </div>

        <section id="about">
          <div className="about-left-side">
            <h2>
              {' '}
              <span className="orange-tag">Step 1:</span> Buy Credits
            </h2>
            <img src={coins} alt="about image" />

            <p>
              Here in Lucky Loot Box, our main currency are credits! You can buy
              those with real money using a credit or debit card or by
              participating in our community!{' '}
            </p>
            <Link to="/credits">Buy Credits Now!</Link>
          </div>

          <div className="about-right-side">
            <div className="about-thumb">
              <div>
                <h2>
                  <span className="orange-tag">Step 2: </span> Choose your
                  lootbox!
                </h2>
                <h2>
                  We have 3 types of boxes that container <strong>3</strong>{' '}
                  items chosen at randomly. Every time you buy a Lucky LootBox
                  you are{' '}
                  <span className="orange-tag">
                    guaranteed not to get the same items again!
                  </span>
                </h2>
              </div>
              <div>second part</div>
            </div>
          </div>
        </section>

        <div className="second carousel">
          <ItemsCarousel />
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
