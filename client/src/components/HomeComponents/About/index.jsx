import { Link } from 'react-router-dom';
import coins from './treasurechest.png';
import './index.scss';
import lootboxes from './lootboxes.png';

import React from 'react';

export default function index() {
  return (
    <div>
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
                chosen at random, in the category of your choice. Every time you
                buy a Lucky LootBox you are{' '}
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
    </div>
  );
}
