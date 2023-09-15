import React from 'react';
import "./App.css"
import SideBar from './Components/SideBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Appoinment from './Pages/Appoinment';
// import Home from './Pages/Home';
// import Logout from './Pages/Logout';
import Notes from './Pages/Notes';

export default function App() {

  return (
    <div className='App'>

      <BrowserRouter>
        <SideBar>
          <Routes>
             <Route path="/Notes" element={<Notes />} />
            {/* <Route path="/" element={<Home />} />
            <Route path="/Appoinment" element={<Appoinment />} />
            <Route path="/Logout" element={<Logout />} /> */}

          </Routes>

        </SideBar>
      </BrowserRouter>



    </div>
  );
}






