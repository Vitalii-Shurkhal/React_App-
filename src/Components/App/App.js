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



const App = (props) => {
    
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state = {props.state.messagesPage} />}/>
                    <Route path='/profile' render={() => <Profile state = {props.state.myPagePage} addPost={props.addPost} />}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>

    )
};

export default App;
