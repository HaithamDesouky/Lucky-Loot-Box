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
      <>
        <Greeting />
        <About />
        <Mystery />
        <Carousel />
      </>
    );
  }
}

export default HomeView;
