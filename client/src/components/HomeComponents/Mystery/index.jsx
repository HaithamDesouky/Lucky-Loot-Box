import React from 'react';
import './index.scss';
import mysterybox from './mystery.png';

export default function index() {
  return (
    <section className="mystery-box">
      <h1>The Mystery Box</h1>
      <div>
        <img src={mysterybox} alt="MysteryBox" />
        <p>
          For just <span className="orange-tag">75 credits</span> extra you can
          try your hand at the <span className="orange-tag">MYSTERY BOX!</span>
          <p>
            The Mystery Box contains <span className="orange-tag">FIVE</span>{' '}
            items! Yup, not three but <span className="orange-tag">FIVE!</span>{' '}
            However, the categories are chosen at random! It's up to you to take
            on the risk!
          </p>
        </p>
      </div>
    </section>
  );
}
