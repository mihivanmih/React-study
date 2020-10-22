import React from 'react';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";

//function App() {
const App = () =>{
  return (
    <div className="app-wrapper">

        <Header/>
        <NavBar/>
        <Profile/>

    </div>
  );
}


export default App;
