import React from 'react';
import Home from './routes/home/home.components.jsx'
import Navigation from './routes/navigation/navigation.components.jsx'
import SignIn from './routes/sign-in/sign-in.component.jsx';
import { Routes, Route, Outlet } from 'react-router-dom'



const Shop = () => {
  return (
    <h1>I am the Shop</h1>
  )
}


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='signIn' element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
