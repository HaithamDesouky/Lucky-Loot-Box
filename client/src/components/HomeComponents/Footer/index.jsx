import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export default function index() {
  return (
    <footer id="footer">
      <div>
        <p>Haitham Desouky</p>

        <ul class="social-icon">
          <li>
            <a href="https://www.linkedin.com/in/haitham-desouky-b862b545/">
              {' '}
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/HaithamDesouky">
              {' '}
              <i className="fab fa-github"></i>
            </a>
          </li>

          <li>
            <i className="fab fa-linkdin-in"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
}
