import React, { Component } from 'react';
import Greeting from '../../components/HomeComponents/Greeting';
import About from '../../components/HomeComponents/About';
import Mystery from '../../components/HomeComponents/Mystery';
import Carousel from '../../components/HomeComponents/Carousel';

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
        <Greeting />
        <About />
        <Mystery />
        <Carousel />
      </div>
    );
  }
}

export default HomeView;
