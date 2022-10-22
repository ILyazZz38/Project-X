import {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import LibraryPage from './pages/LibraryPage';
import ErrorPage from './pages/ErrorPage';

export default class App extends Component{
  constructor(props) {
    super(props);
  }

 render() {
  return(
    <Router>
      <div>
        <ul>
          <li><a href="/Home">Главная</a></li>
          <li><a href="/Games">Игры</a></li>
          <li><a href="/Library">Библиотека</a></li>
        </ul>
        <Routes>
          <Route path='/Home' element={<HomePage/>} />
          <Route path='/Games' element={<GamesPage/>} />
          <Route path='/Library' element={<LibraryPage/>} />
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </div>
    </Router>
  );
  } 
}