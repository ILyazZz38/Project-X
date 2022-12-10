import React, { Component } from 'react';

import GameCard from '../components/GameCard';
import Slider from '../components/Slider'

export class HomePage extends Component {
  
  static displayName = HomePage.name;

  render() {
    return (
      <div>
        <div className="d-flex bg-black rounded w-50 mx-auto bg-opacity-75 mt-5 ">
          <h3 className="mx-auto p-1">ИГРЫ ПО ВАШИМ ПРЕДПОЧТЕНИЯМ</h3>
        </div>
        <Slider games={this.props.games} onGamePage={this.props.onGamePage}/>
        <div className="d-flex bg-black rounded w-25 mx-auto bg-opacity-75">
          <h3 className="mx-auto p-1">ПОПУЛЯРНЫЕ ИГРЫ</h3>
        </div>
        <div className="d-flex bg-black border-radius-app mx-auto mt-3 me-5 ms-5 overflow-auto bg-opacity-50 ">
          <GameCard games={this.props.gamesdata} onGamePage={this.props.onGamePage}/>               
        </div>                          
      </div>      
    );
  }
}

export default HomePage;