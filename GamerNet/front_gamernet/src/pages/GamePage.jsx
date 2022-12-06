import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import CardForGamePage from '../components/CardForGamePage'
import ComputerReq from '../components/ComputerReq'
import RequirementsTabl from '../components/RequirementsTabl'

export class GamePage extends Component {
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
                <ComputerReq ramItem={this.props.ramItem}/>
              </Row>
              <Row className="p-5">
                <div>
                  <h3 className="gamepage-will-fit-text">Официальные системные требования {this.props.game.name}:</h3>
                  <p className="ms-5">Такое железо советуют разработчики для запуска с минимальными и рекомендуемыми настройками. Эти требования обычно очень приблизительны, но на них можно ориентироваться чтобы понять, какого уровня компьютер потребуется для игры.</p>
                </div>
                {/* <RequirementsTabl requirements={this.props.game.minrequirements} recrements={this.props.game.recrements}/> */}
              </Row>
            </Col>
          </Col>

        </Row>
        
      </div>
      
    )
  }
}

export default GamePage