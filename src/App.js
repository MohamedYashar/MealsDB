import React from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './Components/SideBar';
import Notes from './Pages/Notes';

export default function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <SideBar>
          <Routes>
             <Route path="/Notes" element={<Notes />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </div>
  );
}






