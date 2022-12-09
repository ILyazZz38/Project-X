import React, { Component } from 'react';
import axios from "axios";
import { Col, Row, Button } from "react-bootstrap";
import CardGames from '../components/CardGames';
import Pagination from '../components/Pagination';

export class GamesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null,
      currentGames: [],
      totalPages:null,
      countGames:0,
      allGames: []
    };
    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { data: allGames = [] } = this.GetAllGames();
    this.setState({ allGames });
  }

  handleClick(value) {
    this.setState({ PageNumber: value });
    
  } 
  
  async GetAllGames(){
    
    const res = await fetch('https://localhost:7150/api/Games/GetAll', {
      method: "GET",
      headers: {
        "accept":"text/json"
      }
    })
    .then((response) => {
        if(!response.ok) throw new Error(response.status);
        else return response.json();
      })
    .then((data) => {
        return data;    
      //this.setState({ countGames: data });
        console.log("нахуя эти DATA STORED?");
      })
      .catch((error) => {
        console.log('error: ' + error);
        this.setState({ requestFailed: true });
      });
}

  getGames(gameId) {
    axios
      .get(`https://localhost:7150/api/Games?PageNumber=${gameId}&PageSize=2`)
      .then(response => this.setState({ currentGames: response.data, currentPage: gameId }))
      .catch(error => console.log(error));
  }

  onPageChanged = data => {
    const {currentPage, totalPages, pageLimit} = data;
    axios
      .get(`https://localhost:7150/api/Games?PageNumber=${currentPage}&PageSize=${pageLimit}`)
      .then(response => {
        const currentGames = response.data
        this.setState({currentPage, currentGames, totalPages});
      })
      .catch(error => console.log(error));
  }
  
  render() {
    const {currentGames, currentPage, totalPages } = this.state;
    //const countGames = allGames.length;
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
              
                <Row>
                { this.state.currentGames.map(Game => 
                <Col className="m-3 col-3 mx-auto" style={{"width":"300px", "height":"180px"}}>
                  <CardGames game={Game} onGamePage={this.props.onGamePage}/>
                </Col> ) }
                
                </Row>
                <Pagination totalRecords = {20} pageLimit={9} pageNeighbours={2} onPageChanged={this.onPageChanged}  />
              </Row>
            </div>
          </Col> 
        </Row>
        
      </div>
    );
  }
}


export default GamesPage;

