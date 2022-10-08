import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import AssignedEmployees from './Pages/AssignedEmployees';
import Meetings from './Pages/Meetings';
import Reports from './Pages/Reports';
import MonitorEmployees from './Pages/MonitorEmployees';
import Settings from './Pages/Settings';
import ScreenRecording from './Pages/ScreenRecording';
  
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/assigned_employees' component={AssignedEmployees} />
        <Route path='/meetings' component={Meetings} />
        <Route path='/reports' component={Reports} />
        <Route path='/settings' component={Settings} />
        <Route path='/monitor_employees' component={MonitorEmployees} />
        <Route path='/screen_recording' element={<ScreenRecording/>} />
      </Routes>
    </Router>
  );
}
  
export default App;
