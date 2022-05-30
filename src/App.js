import logo from './logo.svg';
import React from  'react'
import './App.scss';
import Header from './components/molecules/header/header';
import MainPage from './components/organism/mainpage/mainpage';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
