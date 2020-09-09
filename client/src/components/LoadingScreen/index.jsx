import React from 'react';
import './index.scss';

export default function index() {
  return (
    <div id="loading-screen">
      <h4>Loading...</h4>

      <div class="fancy-spinner">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="dot"></div>
      </div>
    </div>
  );
}
