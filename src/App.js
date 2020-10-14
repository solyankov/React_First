import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsPage from "./components/Dialogs/DialogsPage";


function App() {
  return (
      <BrowserRouter>
          <div className="App-wrapper">
            <Header />
            <Nav/>
            {/*<DialogsPage/>*/}
            <div className='mainWindow'>
                <Route path='/dialogs' component={DialogsPage}/>
                <Route path='/profile' component={Content}/>
            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
