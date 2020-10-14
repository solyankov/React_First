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
            <Nav/>
            <div className='mainWindow'>
                <Route path='/dialogs' render={()=>
                    <DialogsPage dialogs={props.state.DialogsPage.dialogs}
                                 messages={props.state.DialogsPage.messages
                                 }/>}/>
                <Route path='/profile' render={()=><Content posts={props.state.ProfilePage.posts}
                                                            addPost={props.addPost}/>}/>
            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
