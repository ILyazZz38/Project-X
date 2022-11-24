import React, { Component } from 'react';
import { Col, Row } from "react-bootstrap";
import Card from "../components/Card";

export class GamesPage extends Component {
    constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  static displayName = GamesPage.name;
  
  render() {
    return (
      <div>
        <Row>
          <Col className="col-4">
            <div className='div-menu-for-sorting'>
              <div className='div-menu-for-sorting-fon'>
                <div className='razdel-one'>
                  <h3>Поиск по названию</h3>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Название игры"/>
                </div>

                <div className='razdel-two'>
                  <h3>Фильры</h3>
                  <select class="form-select" aria-label="Пример выбора по умолчанию">
                    <option selected>Жанр</option>
                    <option value="1">Один</option>
                    <option value="2">Два</option>
                    <option value="3">Три</option>
                  </select>
                  <h5>Оценка игры</h5>
                  <input type="range" class="form-range" min="0" max="5" id="customRange2"/>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="overflow-auto">
              <Row className="pb-5 mt-5 w-100 gx-3">
                {this.props.games.map(el =>(
                  <Col className="m-2 col-4" style={{"width":"400px", "height":"250px"}}>              
                    <Card game={el} onGamePage={this.props.onGamePage}/>              
                  </Col>
                ))} 
              </Row>
            </div>
          </Col>  
        </Row>
      </div>
    );
  }
}

export default GamesPage;