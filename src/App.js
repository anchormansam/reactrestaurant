import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Jumbotron from './Components/Jumbotron';
import Accordion from './Components/Accordion.js';


function App() {
  return (
    <React.Fragment>

    <Jumbotron />
    <Accordion />
    
    </React.Fragment>
  );
}

export default App;
