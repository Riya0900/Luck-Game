import logo from './logo.jpg';
import React from "react";
import './App.css';

class ClassMain extends React.Component {
  render() {
    return (
      <>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className='heading'> Welcome To The Gaming Zone!!!</h1>
        </header>
      <p className='des'>Helloo Gamers!!  Let's Begin the Game.  Click Any 3 Buttons From Below and See Your Luck....  </p>
      <p className='tar'>Your Minimum Target : 15</p>
      </>
    );
  }
}

export default ClassMain;