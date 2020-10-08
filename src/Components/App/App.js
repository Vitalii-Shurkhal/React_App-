import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Nav from "../NavBar/NavBar";
import Profile from "../Profile/Profile";



const App = () => {
  return (
      <div className='app-wrapper'>
          <Header />
          <Nav />
          <Profile />
      </div>
  )
};

export default App;
 