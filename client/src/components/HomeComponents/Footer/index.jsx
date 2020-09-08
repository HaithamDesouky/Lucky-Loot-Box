import React from 'react';
import './index.scss';

export default function index() {
  return (
    <footer id="footer">
      <ul class="social-icon">
        <li>Copyright © 2020 BandFinder | Contact us: </li>
        <li>
          <i className="fab fa-github"></i>
        </li>

        <li>
          <i className="fab fa-react"></i>
        </li>
        <li>
          <i className="fab fa-twitter"></i>
        </li>
        <li>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          {' '}
          <i className="fab fa-facebook"></i>
        </li>
        <li>
          <i className="fab fa-linkdin-in"></i>
        </li>
      </ul>
    </footer>
  );
}
