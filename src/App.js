import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsPage from "./components/Dialogs/DialogsPage";
import s from './components/Nav/Nav.module.css'



function App(props) {
  return (
      <BrowserRouter>
          <div className="App-wrapper">
                <Header />
            <div className="FirstDiv">
                <div className="SecondDiv">
                    <Nav/>
                    <div className='mainWindow'>
                            <Route path='/dialogs' render={()=>
                                <DialogsPage dispatch={props.dispatch}
                                             state={props.state}
                                             NewMessageText={props.state.DialogsPage.NewMessageText}
                                        />}/>
                            <Route path='/profile' render={()=>
                                <Content posts={props.state.ProfilePage.posts}
                                         dispatch={props.dispatch}
                                         NewPostText={props.state.ProfilePage.NewPostText}
                                         />}/>
                    </div>
                </div>
            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
