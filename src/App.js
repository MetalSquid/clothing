import React from 'react';
import Home from './routes/home/home.components.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
