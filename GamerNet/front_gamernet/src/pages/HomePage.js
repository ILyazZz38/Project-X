import React, { Component } from 'react';

import Slider from '../components/Slider'
import GameCard from '../components/GameCard';
import Pagination from '../components/Pagination';

const Gamelist = [
  {
    id:'1',
    name:'Название игры 1',
    discription:'Краткое описание игры 1',
    img: 'https://css-pro.ru/_ld/101/10184.jpg'
  },
  {
    id:'2',
    name:'Название игры 2 Название игры 2',
    discription:'Краткое описание игры 2 Краткое описание игры 2',
    img: 'https://i.playground.ru/p/nkw1dsGtMa4PlnfVbKxkRA.jpeg'
  },
  {
    id:'3',
    name:'Название игры 3 Название игры 3 Название игры 3',
    discription:'Краткое описание игры 3 Краткое описание игры 3 Краткое описание игры 3',
    img: 'https://difmark.com/images/product/2/2/22002/the-surge-2-ps4_orig_6.jpg'
  },
  {
    id:'4',
    name:'Название игры 4 Название игры 4 Название игры 4 Название игры 4',
    discription:'Краткое описание игры 4 Краткое описание игры 4 Краткое описание игры 4 Краткое описание игры 4',
    img: 'https://i.playground.ru/p/nkw1dsGtMa4PlnfVbKxkRA.jpeg'
  },
  {
    id:'5',
    name:'Название игры 5',
    discription:'Краткое описание игры 5 Краткое описание игры 5 Краткое описание игры 5 Краткое описание игры 5 Краткое описание игры 5',
    img: 'https://i.playground.ru/p/nkw1dsGtMa4PlnfVbKxkRA.jpeg'
  },
  {
    id:'6',
    name:'Название игры 6',
    discription:'Краткое описание игры 6 Краткое описание игры 6 Краткое описание игры Краткое описание игры 6 Краткое описание игры 6 Краткое описание игры 6',
    img: 'https://i.playground.ru/p/nkw1dsGtMa4PlnfVbKxkRA.jpeg'
  },
  {
    id:'7',
    name:'Название игры 7',
    discription:'Краткое описание игры 7',
    img: 'https://i.playground.ru/p/nkw1dsGtMa4PlnfVbKxkRA.jpeg'
  },
  {
    id:'8',
    name:'Название игры 8',
    discription:'Краткое описание игры 8',
    img: 'https://i.playground.ru/p/nkw1dsGtMa4PlnfVbKxkRA.jpeg'
  },
  {
    id:'9',
    name:'Название игры 9',
    discription:'Краткое описание игры 9',
    img: 'https://i.playground.ru/p/nkw1dsGtMa4PlnfVbKxkRA.jpeg'
  },
  {
    id:'10',
    name:'Название игры 10',
    discription:'Краткое описание игры 10',
    img: 'https://i.playground.ru/p/nkw1dsGtMa4PlnfVbKxkRA.jpeg'
  }
]

export class Home extends Component {
  constructor(props) {
    super(props);
    this.game = Gamelist;
  }
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div className="d-flex bg-black rounded w-50 mx-auto bg-opacity-50 mt-5 ">
          <h3 className="mx-auto p-1">ИГРЫ ПО ВАШИМ ПРЕДПОЧТЕНИЯМ</h3>
        </div>        
        <Slider list={this.game}/>
        <div className="d-flex bg-black rounded w-25 mx-auto bg-opacity-50">
          <h3 className="mx-auto p-1">ПОПУЛЯРНЫЕ ИГРЫ</h3>
        </div>
        <div className="d-flex bg-white rounded mx-auto mt-5 me-5 ms-5 overflow-auto bg-opacity-50 ">
          <GameCard list={this.game}/>                  
        </div>
                  
      </div>      
    );
  }
}

export default Home;