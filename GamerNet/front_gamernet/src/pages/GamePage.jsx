import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import CardForGamePage from '../components/CardForGamePage'
import NormalComputerReq from '../components/NormalCompReq'
import RequirementsTabl from '../components/RequirementsTabl'

class GamePage extends Component {

  render() {
    return (
      <div className="gamepage-one-div">
        <Row>
          <Col  className="col-4 gamepage-block bg-opacity-75">
            <CardForGamePage game={this.props.game}/>
          </Col>          
          <Col>
            <Col className="col-4 gamepage-block-will-fit bg-opacity-75 shadow">
              <Row>
                <div>
                  <h3 className="gamepage-will-fit-text shadow p-2">Подойдет ли игра?</h3>
                </div>
              </Row>
              <Row className="gamepage-div-control-inputs">
                <NormalComputerReq gameId = {this.props.game.id} ramItem={this.props.ramItem} processor = {this.props.processor} videocard = {this.props.videocard} pcram = {this.props.pcram}/>
              </Row>
              <Row className="p-5">
                <div>
                  <h3 className="gamepage-will-fit-text">Официальные системные требования {this.props.game.name}:</h3>
                  <p className="ms-5">Такое железо советуют разработчики для запуска с минимальными и рекомендуемыми настройками. Эти требования обычно очень приблизительны, но на них можно ориентироваться чтобы понять, какого уровня компьютер потребуется для игры.</p>
                </div>
                <RequirementsTabl requirements={this.props.game.minRequirement} recrements={this.props.game.maxRequirement}/>
              </Row>
            </Col>
          </Col>
        </Row>
      </div>
      
    )
  }
}

export default GamePage