import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
