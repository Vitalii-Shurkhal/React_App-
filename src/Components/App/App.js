import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Nav from "../NavBar/NavBar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import News from '../News/News'
import  {BrowserRouter, Route} from "react-router-dom";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";



const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>

    )
};

export default App;
