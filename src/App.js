import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/News";
import Settings from "./components/Settings/Settings";
import {updateNewPostText} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/profile'> <Profile updateNewPostText={props.updateNewPostText}
                                                     state={props.state.profilePage}
                                                     addPost={props.addPost}/>
                    </Route>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.messagesPage}
                                                  addMessage={props.addMessage}
                                                  updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
