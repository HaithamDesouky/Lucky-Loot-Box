import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeView.scss';

import { render } from 'react-dom';
import ItemsCarousel from '../../components/ItemsCarousel';
import coins from './treasurechest.png';
import './HowItWorksSection.scss';
import './MysteryBox.scss';
import './CarouselSection.scss';

import lootboxes from './lootboxes.png';
import mysterybox from './mystery.png';

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
            <img src={coins} alt="about image" id="treasure-credits" />

            <p>
              Here in Lucky Loot Box, our main currency are credits! You can buy
              those with real money using a credit or debit card or by
              participating in our community!
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
                <p>
                  We have 3 types of boxes that contain{' '}
                  <span className="orange-tag">3 items </span>
                  chosen at random, in the category of your choice. Every time
                  you buy a Lucky LootBox you are{' '}
                  <span className="orange-tag">
                    guaranteed not to get the same items again!
                  </span>
                </p>

                <h3>The 3 catergories are: </h3>
                <ul>
                  <li>
                    <i class="fas fa-tv orange-tag"></i> Anime
                  </li>
                  <li>
                    <i class="fas fa-gamepad orange-tag"></i> Video Games
                  </li>
                  <li>
                    <i class="fas fa-film orange-tag"></i> Entertainment{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="vertical-boxes">
            <img src={lootboxes} alt="" />
          </div>
        </section>

        <section className="mystery-box">
          <h1>The Mystery Box</h1>
          <div>
            <img src={mysterybox} alt="MysteryBox" />
            <p>
              For just <span className="orange-tag">75 credits</span> extra you
              can try your hand at the{' '}
              <span className="orange-tag">MYSTERY BOX!</span>
              <p>
                The Mystery Box contains{' '}
                <span className="orange-tag">FIVE</span> items! Yup, not three
                but <span className="orange-tag">FIVE!</span> However, the
                categories are chosen at random! It's up to you to take on the
                risk!
              </p>
            </p>
          </div>
        </section>

        <div className="carousel-div carousel">
          <h1>What's inside?</h1>
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
