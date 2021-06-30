import React from 'react';
import Wrapper from './components/Wrapper';

import { BrowserRouter } from 'react-router-dom';

import './assets/css/app.css';

function App() {
  return (
    <div id='the-box'>
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
