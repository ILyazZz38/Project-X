import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import ErrorPage from './pages/ErrorPage'

import Navibar from './components/Navibar';



export default class App extends Component{
  constructor(props) {
    super(props);
  }

 render() {
  return(
    <Router>
      <div className="bg-primary bg-opacity-50 text-white">
        <Navibar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/Games' element={<GamesPage/>} />
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </div>      
    </Router>
    );
  } 
}