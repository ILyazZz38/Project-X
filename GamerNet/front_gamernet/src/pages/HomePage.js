import React, { Component } from 'react';
import Slider from '../components/Slider'

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <Slider/>
    );
  }
}

export default Home;