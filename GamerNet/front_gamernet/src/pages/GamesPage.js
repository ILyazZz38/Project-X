import React, { Component } from 'react';
import { Col, Row } from "react-bootstrap";
import Card from "../components/Card";

export class GamesPage extends Component {
    constructor(props) {
    super(props);
    this.state = {
      Games: [
        {
          id:'1',
          name:'GTA V',
          discription:'Мультиплатформенная компьютерная игра в жанре action-adventure с открытым миром, разработанная компанией Rockstar North и изданная компанией Rockstar Games.',
          img: 'https://compass-ssl.xbox.com/assets/a0/4f/a04f2744-74d9-4668-8263-e0261fbea869.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg'
        },
        {
          id:'2',
          name:'Cyberpunk 2077',
          discription:'Игра в жанре action-adventure в открытом мире, разработанная и изданная польской студией CD Projekt. Действие игры происходит в 2077 году в Найт-Сити, вымышленном североамериканском городе из вселенной Cyberpunk.',
          img: 'https://cdn.igromania.ru/mnt/games/4/9/4/a/d/0/14727/73f7677257f9bfa6_1920xH.jpg'
        },
        {
          id:'3',
          name:'Counter Strike Global Offensive',
          discription:'Многопользовательская компьютерная игра, разработанная компаниями Valve и Hidden Path Entertainment. Выпуск игры для персональных компьютеров на операционных системах Windows и macOS, также игровых приставках Xbox 360 и PlayStation 3 состоялся 21 августа 2012 года.',
          img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1668125812'
        },
        {
          id:'4',
          name:'Red Dead Redemption 2',
          discription:'Игра в жанрах action-adventure и шутера от третьего лица с открытым миром, разработанная Rockstar Studios и выпущенная Rockstar Games для консолей PlayStation 4 и Xbox One 26 октября 2018 года и для персональных компьютеров под управлением Windows 5 ноября 2019 года.',
          img: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg'
        },
        {
          id:'5',
          name:'Ведьмак 3: Дикая Охота',
          discription:'Игра в жанре action/RPG, разработанная польской студией CD Projekt RED. Выпущенная 19 мая 2015 года на Windows, PlayStation 4 и Xbox One, затем 15 октября 2019 года на Nintendo Switch, она является повествованием, продолжающим игры «Ведьмак» и «Ведьмак 2: Убийцы королей».',
          img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header_russian.jpg?t=1668443314'
        },
        {
          id:'6',
          name:'Call of Duty: Warzone',
          discription:'Мультиплатформенная free-to-play компьютерная игра в жанре многопользовательского шутера от первого лица и королевской битвы, разработанная компаниями Infinity Ward и Raven Software и изданная Activision 10 марта 2020 года для ПК, PlayStation 4 и Xbox One.',
          img: 'https://applespbevent.ru/content/images/2022/03/CoDW.jpg'
        },
        {
          id:'7',
          name:'Fortnite',
          discription:'Компьютерная онлайн-игра, разработанная американской компанией Epic Games совместно с People Can Fly и выпущенная в ранний доступ в 2017 году.',
          img: 'https://static-assets-prod.epicgames.com/competitive/static/webpack/1d89ee10c18f54afa33cf8063c27d7d4.jpg'
        },
        {
          id:'8',
          name:'Metro Exodus',
          discription:'Игра в жанре шутера от первого лица, разработанная украинской компанией 4A Games и изданная Deep Silver. Выход игры состоялся 15 февраля 2019 года для игровых платформ ПК, PlayStation 4 и Xbox One.',
          img: 'https://s3.gaming-cdn.com/images/products/11561/orig/metro-exodus-xbox-one-xbox-series-x-s-xbox-one-xbox-series-x-s-game-microsoft-store-united-states-cover.jpg?v=1653400111'
        },
        {
          id:'9',
          name:'Minecraft',
          discription:'Компьютерная инди-игра в жанре песочницы, созданная шведским программистом Маркусом Перссоном и выпущенная его компанией Mojang AB.',
          img: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg'
        },
        {
          id:'10',
          name:'Dota 2',
          discription:'Многопользовательская командная компьютерная игра в жанре MOBA, разработанная и изданная корпорацией Valve. Игра является продолжением DotA — пользовательской карты-модификации для игры Warcraft III: Reign of Chaos и дополнения к ней Warcraft III: The Frozen Throne.',
          img: 'https://cdn.akamai.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1650611880'
        }
      ]
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
                {this.state.Games.map(el =>(
                  <Col className="m-2 col-4" style={{"width":"400px", "height":"250px"}}>              
                    <Card game={el}/>              
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