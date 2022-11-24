import React, { Component } from 'react'

export class GamePage extends Component {
  render() {
    return (
      <h1>{this.props.game.name}</h1>
    )
  }
}

export default GamePage