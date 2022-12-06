import React, { Component } from 'react';
import axios from "axios";
import { Col, Row, Button } from "react-bootstrap";
import CardGames from '../components/CardGames';

export class GamesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        PageNumber: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({ PageNumber: value });
  }  
  
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
            <div className="div-menu-for-sorting-fon mt-5">
              <Row className="pb-5 gx-3">             
                <Cards gameId={this.state.PageNumber} onGamePage={this.props.onGamePage}/>
                <Row>
                  <Col>
                    <PageSelectorPrev
                      PageNumber={this.state.PageNumber}
                      PageSize={this.state.PageSize}
                      handleClick={this.handleClick}
                    />
                  </Col>
                  <Col>
                    <PageSelectorNext
                      PageNumber={this.state.PageNumber}
                      PageSize={this.state.PageSize}
                      handleClick={this.handleClick}
                    />
                  </Col>
                </Row>
              </Row>
            </div>
          </Col> 
        </Row>
        
      </div>
    );
  }
}
function PageSelectorPrev(props) {

  let gameprevId = props.PageNumber -1
  return (
    <div className="button-Prev">
      <Button  variant="outline-light" onClick={() => props.handleClick(gameprevId)}>Предыдущая</Button>
    </div>    
  )
}

function PageSelectorNext(props) {

  let gameNextId = props.PageNumber + 1
  return (
    <div className="button-Next">
      <Button variant="outline-light" onClick={() => props.handleClick(gameNextId)}>Следующая</Button>
    </div>    
  )      
}

export default GamesPage;

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        game: []
    };
  }

  componentDidMount() {
    this.getGames(this.props.gameId);
  }

  componentDidUpdate() {
    this.getGames(this.props.gameId);
  }

  getGames(gameId) {
    axios
      .get(`https://localhost:7150/api/Games?PageNumber=${gameId}&PageSize=3`)
      .then(response => this.setState({ game: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Row className="pb-2 mt-1 w-100 gx-3">
        { this.state.game.map(game =>
          <Col className="m-3 col-3 mx-auto" style={{"width":"300px", "height":"180px"}}>
            <CardGames game={game}/>
          </Col>
        )}
      </Row>
    )      
  }
}