import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export class CardForGamePage extends Component {
  render() {
    return (
      <div>
        <Row className="p-1">
          <div className="gamepage-name-wrapper shadow">
            <h3>{this.props.game.name}</h3>
          </div>              
          <Row>
            <div className="gamepage-div-img-params">
              <img
                src={this.props.game.img}
                  className="gamepage-img-params rounded shadow"
                />
            </div>
          </Row>
          <Row>
            <div className="gamepage-div-discription bg-opacity-75 shadow">
              <p>{this.props.game.discription}</p>
            </div>
          </Row>
        </Row>
      </div>
    )
  }
}

export default CardForGamePage