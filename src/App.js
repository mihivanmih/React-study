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
import store, {updateNewPostText} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import StoreContext from "./StoreContext";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <StoreContext.Consumer>
                    {
                        (store) => (
                         <NavBar state={store.getState().sidebar}/>
                    )
                    }
                </StoreContext.Consumer>
                <div className="app-wrapper-content">
                    <Route path='/profile'>
                        <StoreContext.Consumer>
                            {
                            (store) => (
                                <Profile store={store}/>
                                )
                            }
                        </StoreContext.Consumer>
                    </Route>
                    <Route path='/dialogs'
                           render={() =>
                               <StoreContext.Consumer>
                                   {
                                       (store) => (
                               <DialogsContainer store={store} />
                                       )
                                   }
                               </StoreContext.Consumer>
                           }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
