import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import GamePage from './pages/GamePage'
import ErrorPage from './pages/ErrorPage'

import Navibar from './components/Navibar';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Games: [
        {
          id:'1',
          name:'GTA V',
          discription:'Мультиплатформенная компьютерная игра в жанре action-adventure с открытым миром, разработанная компанией Rockstar North и изданная компанией Rockstar Games.',
          img: 'https://compass-ssl.xbox.com/assets/a0/4f/a04f2744-74d9-4668-8263-e0261fbea869.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg',
          rating: '4,6',
          minrequirements: {
            cpu: [
              {
              id:'718',
              manufacturer: 'Intel',
              name: 'Intel Core 2 Quad Q6600'
              },
              {
                id:'911',
                manufacturer: 'AMD',
                name: 'AMD Phenom II X4 N950'
                }
            ],
            videocards: [
              {
                id:'552',
                manufacturer: 'NVIDIA',
                name: 'NVIDIA GeForce 9800M GT'
              },
              {
                id:'482',
                manufacturer: 'AMD',
                name: 'ATI Mobility Radeon HD 4870'
              }
          ],
            ram : '4',          
          },
          recrements: {
            cpu: [
              {
              id:'396',
              manufacturer: 'Intel',
              name: 'Intel Core i5-3470'
              },
              {
                id:'399',
                manufacturer: 'AMD',
                name: 'AMD FX-8350'
                }
            ],
            videocards: [
              {
                id:'375',
                manufacturer: 'NVIDIA',
                name: 'NVIDIA GeForce GTX 660M'
              },
              {
                id:'355',
                manufacturer: 'AMD',
                name: 'AMD Radeon HD 7870M'
              }
          ],
            ram: '8'
          }
        },
        {
          id:'2',
          name:'Cyberpunk 2077',
          discription:'Игра в жанре action-adventure в открытом мире, разработанная и изданная польской студией CD Projekt. Действие игры происходит в 2077 году в Найт-Сити, вымышленном североамериканском городе из вселенной Cyberpunk.',
          img: 'https://cdn.igromania.ru/mnt/games/4/9/4/a/d/0/14727/73f7677257f9bfa6_1920xH.jpg',
          rating: '4,1',
          minrequirements: {
            cpu: [
              {
              id:'369',
              manufacturer: 'Intel',
              name: 'Intel Core i5-3570K'
              },
              {
                id:'399',
                manufacturer: 'AMD',
                name: 'AMD FX-8350'
                }
            ],
            videocards: [
              {
                id:'156',
                manufacturer: 'NVIDIA',
                name: 'NVIDIA GeForce GTX 970'
              },
              {
                id:'165',
                manufacturer: 'AMD',
                name: 'AMD Radeon RX 470'
              }
          ],
            ram : '8',          
          },
          recrements: {
            cpu: [
              {
              id:'231',
              manufacturer: 'Intel',
              name: 'Intel Core i7-4790'
              },
              {
                id:'243',
                manufacturer: 'AMD',
                name: 'AMD Ryzen 3 3300X'
                }
            ],
            videocards: [
              {
                id:'135',
                manufacturer: 'NVIDIA',
                name: 'NVIDIA GeForce GTX 1060'
              },
              {
                id:'129',
                manufacturer: 'AMD',
                name: 'AMD Radeon RX 590'
              }
          ],
            ram: '12'
          }
        },
        {
          id:'3',
          name:'Counter Strike Global Offensive',
          discription:'Многопользовательская компьютерная игра, разработанная компаниями Valve и Hidden Path Entertainment. Выпуск игры для персональных компьютеров на операционных системах Windows и macOS, также игровых приставках Xbox 360 и PlayStation 3 состоялся 21 августа 2012 года.',
          img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1668125812',
          rating: '3,9'
        },
        {
          id:'4',
          name:'Red Dead Redemption 2',
          discription:'Игра в жанрах action-adventure и шутера от третьего лица с открытым миром, разработанная Rockstar Studios и выпущенная Rockstar Games для консолей PlayStation 4 и Xbox One 26 октября 2018 года и для персональных компьютеров под управлением Windows 5 ноября 2019 года.',
          img: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
          rating: '4'
        },
        {
          id:'5',
          name:'Ведьмак 3: Дикая Охота',
          discription:'Игра в жанре action/RPG, разработанная польской студией CD Projekt RED. Выпущенная 19 мая 2015 года на Windows, PlayStation 4 и Xbox One, затем 15 октября 2019 года на Nintendo Switch, она является повествованием, продолжающим игры «Ведьмак» и «Ведьмак 2: Убийцы королей».',
          img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header_russian.jpg?t=1668443314',
          rating: '4,8'
        },
        {
          id:'6',
          name:'Call of Duty: Warzone',
          discription:'Мультиплатформенная free-to-play компьютерная игра в жанре многопользовательского шутера от первого лица и королевской битвы, разработанная компаниями Infinity Ward и Raven Software и изданная Activision 10 марта 2020 года для ПК, PlayStation 4 и Xbox One.',
          img: 'https://applespbevent.ru/content/images/2022/03/CoDW.jpg',
          rating: '3,2'
        },
        {
          id:'7',
          name:'Fortnite',
          discription:'Компьютерная онлайн-игра, разработанная американской компанией Epic Games совместно с People Can Fly и выпущенная в ранний доступ в 2017 году.',
          img: 'https://static-assets-prod.epicgames.com/competitive/static/webpack/1d89ee10c18f54afa33cf8063c27d7d4.jpg',
          rating: '5'
        },
        {
          id:'8',
          name:'Metro Exodus',
          discription:'Игра в жанре шутера от первого лица, разработанная украинской компанией 4A Games и изданная Deep Silver. Выход игры состоялся 15 февраля 2019 года для игровых платформ ПК, PlayStation 4 и Xbox One.',
          img: 'https://s3.gaming-cdn.com/images/products/11561/orig/metro-exodus-xbox-one-xbox-series-x-s-xbox-one-xbox-series-x-s-game-microsoft-store-united-states-cover.jpg?v=1653400111',
          rating: '3,9'
        },
        {
          id:'9',
          name:'Minecraft',
          discription:'Компьютерная инди-игра в жанре песочницы, созданная шведским программистом Маркусом Перссоном и выпущенная его компанией Mojang AB.',
          img: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg',
          rating: '4,8'
        },
        {
          id:'10',
          name:'Dota 2',
          discription:'Многопользовательская командная компьютерная игра в жанре MOBA, разработанная и изданная корпорацией Valve. Игра является продолжением DotA — пользовательской карты-модификации для игры Warcraft III: Reign of Chaos и дополнения к ней Warcraft III: The Frozen Throne.',
          img: 'https://cdn.akamai.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1650611880',
          rating: '4,1'
        }
      ],
      RAM: [
        {
          id: '1',
          number: '1'
        },
        {
          id: '2',
          number: '2'
        },
        {
          id: '3',
          number: '3'
        },
        {
          id: '4',
          number: '4'
        },
        {
          id: '5',
          number: '6'
        },
        {
          id: '6',
          number: '8'
        },
        {
          id: '7',
          number: '12'
        },
        {
          id: '8',
          number: '16'
        },
        {
          id: '9',
          number: '24'
        },
        {
          id: '10',
          number: '32'
        },
        {
          id: '11',
          number: '48'
        },
        {
          id: '12',
          number: '64'
        },
        {
          id: '13',
          number: '96'
        },
        {
          id: '14',
          number: '128'
        },
        {
          id: '15',
          number: '192'
        },
        {
          id: '16',
          number: '256'
        }
      ],
      ShowGamePage: false,
      GameItem: {},    
    }
    this.onGamePage = this.onGamePage.bind(this)
  }
 render() {
  return(

    <div className="app-one-div-css">
      <Routes>
        <Route path='/' element={<Navibar/>}>
          <Route index element={<HomePage games={this.state.Games} onGamePage={this.onGamePage}/>} />              
          <Route path='Games' element={<GamesPage games={this.state.Games} onGamePage={this.onGamePage}/>} />
          <Route path='Game' element={<GamePage game={this.state.GameItem} ramItem={this.state.RAM}/>} />
          <Route path='*' element={<ErrorPage/>}/>
        </Route>        
      </Routes>
    </div>
    );
  }
  onGamePage(game) {
    this.setState({GameItem:game})
    this.setState({ShowGamePage: !this.state.ShowGamePage})
  }
}