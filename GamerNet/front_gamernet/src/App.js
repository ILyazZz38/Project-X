import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import LibraryPage from './pages/LibraryPage'
import ErrorPage from './pages/ErrorPage'

import Navibar from './components/Navibar';

export default class App extends Component{
  constructor(props) {
    super(props);
  }

 render() {
  return(
    <Router>
      <Navibar/>
      <Routes>
        <Route path='/Home' element={<HomePage/>} />
        <Route path='/Games' element={<GamesPage/>} />
        <Route path='/Library' element={<LibraryPage/>} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
    );
  } 
}