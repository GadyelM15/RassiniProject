import React from 'react';
import { Routes, Route, HashRouter, Switch } from 'react-router-dom';
import './App.css';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import Login from './components/Login/Login';

import DrawerRouterContainer from './components/Dashboard/DrawerRouterContainer';

// /********************* RFID *************************************************/
import { RptInvMissMatch } from './components/modRFID/xxRptInvMissMatch';

function App() {

  return (

    <div className='App'>
      <DrawerRouterContainer>
        <Routes>
          <Route index exact element={<Login />} />
          <Route exact path="/RassiniFrenos" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/RFID/rptInvMissMatch" element={<RptInvMissMatch />} /> 
        </Routes>
      </DrawerRouterContainer>
    </div>

  );

}

export default App;
