import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import GamePage from './pages/GamePage'
import ErrorPage from './pages/ErrorPage'

import Navibar from './components/Navibar';
import AccountPage from './pages/AccountPage';

export default class App extends Component{
  
 render() {
  return(
    <ResponseData/>
    );
  }
}

class ResponseData extends Component {
  constructor(props) {
    super(props);
    this.state = {
        game: [],
        user: [],
        pc: [],
        processor: [],
        videocard: [],
        FavoriteGames: [],
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
        GameItem: {},
        isLoggedIn: false,
    };
    this.onGamePage = this.onGamePage.bind(this)
  }

  componentDidMount() {
    this.getUserId();
  }

  getUserId = async () => {
    const  token = localStorage.getItem("token");
    const res = await fetch("https://localhost:5001/api/Authenticate", {
        method: "GET",
        headers: {
            "accept":"text/json",
            "Authorization": "Bearer " + token,
        }
    })
    .then((response) => {
        if(!response.ok) throw new Error(response.status);
        else return response.json();
      })
    .then((data) => {
        this.setState({ user: data });
        this.setState({ isLoggedIn: true });
        console.log("Пользователь получен");
      })
      .catch((error) => {
        console.log('error: ' + error);
        this.setState({ isLoggedIn: false });
      });
      this.getGames()
  }
  
  getGames = async () => {
    const res = await fetch("https://localhost:7150/api/Games?PageNumber=1&PageSize=4", {
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
        this.setState({ game: data });
        console.log("База с играми загружена");
      })
      .catch((error) => {
        console.log('Ошибка загрузки базы с играми: ' + error);
      });
      if(this.state.game != undefined){
        if (this.state.isLoggedIn & this.state.user.computerId != undefined){
          this.getPC(this.state.user.computerId)
        }
        else{
          if(this.state.FavoriteGames == undefined){
            this.state.FavoriteGames = this.state.game
          }
        }
      }
      else{
        this.getGames()
      }
      
  }

  getGames = async () => {
    const res = await fetch("https://localhost:7150/api/Games?PageNumber=1&PageSize=9", {
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
        this.setState({ game: data });
        console.log("База с играми загружена");
      })
      .catch((error) => {
        console.log('Ошибка загрузки базы с играми: ' + error);
      });
      if(this.state.game != undefined){
        if (this.state.isLoggedIn & this.state.user.computerId != undefined){
          this.getPC(this.state.user.computerId)
        }
        else{
            this.state.FavoriteGames = this.state.game
        }
      }
      else{
        this.getGames()
      }
}

  getPC = async (pcid) => {
      const res = await fetch(`https://localhost:7150/api/Computers/${pcid}`, {
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
        this.setState({ pc: data });
        console.log("ПК пользователя получен");
        
      })
      .catch((error) => {
        console.log('error: ' + error);
        this.setState({ requestFailed: true });
      });
      if (this.state.pc.processorId != undefined){
        this.getPeocessor(this.state.pc.processorId)
      }
      else{
        this.getPC(pcid)
      }
  }

  getPeocessor = async (processorId) => {
      const res = await fetch(`https://localhost:7150/api/Processors/${processorId}`, {
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
        this.setState({ processor: data });
        console.log("Процессор получен");
      })
      .catch((error) => {
        console.log('error: ' + error);
        this.setState({ requestFailed: true });
      });
      if (this.state.pc.videoCardId != undefined){
        this.getCard(this.state.pc.videoCardId)
      }
      else{
        this.getPeocessor(processorId)
      }
  }

  getCard = async (CardId) => {
      const res = await fetch(`https://localhost:7150/api/VideoCards/${CardId}`, {
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
        this.setState({ videocard: data });
        console.log("Видеокарта получена");
      })
      .catch((error) => {
        console.log('error: ' + error);
        this.setState({ requestFailed: true });
      });
      if (this.state.pc.videoCardId != undefined){
        this.getUserFavorite()
      }
      else{
        this.getCard(CardId)
      }
  }

getUserFavorite = async () => {
  const res = await fetch(`https://localhost:7150/api/GamesFavorite?userID=${this.state.user.id}&PageNumber=1&PageSize=5`, {
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
      this.setState({ FavoriteGames: data });
      console.log("Рекомендации получены");
    })
    .catch((error) => {
      console.log('error: ' + error);
    });
}

  render() {
    return (
      <div className="app-one-div-css">
      <Routes>
        <Route path='/' element={<Navibar/>}>
          <Route index element={<HomePage games={this.state.FavoriteGames} onGamePage={this.onGamePage} gamesdata={this.state.game}/>}/>
          <Route path='Profile' element={<AccountPage ramItem={this.state.RAM}/>}/>
          <Route path='Games' element={<GamesPage onGamePage={this.onGamePage}/>} games={this.state.game} />
          <Route path='Game' element={<GamePage game={this.state.GameItem} ramItem={this.state.RAM} processor = {this.state.processor} videocard = {this.state.videocard} pcram = {this.state.pc.ram}/>} />
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </div>
    )
  }
  onGamePage(game) {
    this.setState({GameItem:game})
  }
}