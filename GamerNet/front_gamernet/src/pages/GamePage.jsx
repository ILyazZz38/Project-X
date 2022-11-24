import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import CardForGamePage from '../components/CardForGamePage'
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
                  <h4 className="ms-5 mt-5">Ваша система:</h4>
                </div>
              </Row>
              <Row className="gamepage-div-control-inputs">
                <Col>
                  <div class="form-floating mb-3 shadow">
                    <input type="text" class="form-control" id="formGroupExampleInputP" placeholder="Процессор"/>
                    <label for="floatingInput" className="text-color-dark">Процессор</label>
                  </div>
                </Col>
                <Col>
                  <div class="form-floating mb-3 shadow">
                    <input type="text" class="form-control" id="formGroupExampleInputV" placeholder="Видеокарта"/>
                    <label for="formGroupExampleInputV" className="text-color-dark">Видеокарта</label>
                  </div>
                </Col>
                <Col className="col-3">
                  <div class="form-floating mb-3 shadow">                    
                    <select class="form-select" id="formGroupExampleInputO">
                    <option value="1">-</option>
                    {this.props.ramItem.map(el=>(
                      <option value={el.id}>{el.number} ГБ</option>
                    ))}
                    </select>
                    <label for="formGroupExampleInputO" className="text-color-dark">Оперативная память</label>
                  </div>
                </Col>
              </Row>
              <Row className="p-5">
                <div>
                  <h3 className="gamepage-will-fit-text">Официальные системные требования {this.props.game.name}:</h3>
                  <p className="ms-5">Такое железо советуют разработчики для запуска с минимальными и рекомендуемыми настройками. Эти требования обычно очень приблизительны, но на них можно ориентироваться чтобы понять, какого уровня компьютер потребуется для игры.</p>
                </div>
                <RequirementsTabl requirements={this.props.game.minrequirements} recrements={this.props.game.recrements}/>
              </Row>
            </Col>
          </Col>

        </Row>
        
      </div>
      
    )
  }
}

export default GamePage