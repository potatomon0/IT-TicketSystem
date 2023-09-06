import React, { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
// import { getUser } from "./utilities/users-service";
import AuthPage from './pages/AuthPage/AuthPage'
import NewTicketPage from './pages/NewTicketPage/NewTicketPage'
import TicketHistoryPage from './pages/TicketHistoryPage/TicketHistoryPage'
import NavBar from './components/NavBar/NavBar'
import EditTicket from './components/EditTicket/EditTicket'
import {AppContext} from './contexts/context'


function App() {
  const {user, setUser} = useContext(AppContext)//array destructuring useState hook, the first one is a state variable and the second one is setState method
  //every time the page load it check the user state, it will return either a payload or null
  return (
    <main className="App">

      {/* ternary conditional rendering: if user not null aka has data, render <Routes> : falsy render <AuthPage> */}
      {user ?
        <>
        <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/user/create-ticket" element={<NewTicketPage user={user} />} />
            <Route path="/user/tickethistory" element={<TicketHistoryPage />} />
            <Route path="/user/edit-Ticket" element={<EditTicket />} />
          </Routes>
        </> : <AuthPage setUser={setUser} user={user}/>}
    </main>
  );
}

export default App;
