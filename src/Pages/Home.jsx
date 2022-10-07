import React from 'react';

import './NavBar.css';
import './Header.css';

import { ContainerOutlined } from '@ant-design/icons';
import './Home.css';
import { useState } from 'react';

import Meetings from './Meetings';
import AssignedEmployees from './AssignedEmployees';
import Dashboard from './Dashboard';
import MonitorEmployees from './MonitorEmployees';
import Reports from './Reports';
import Settings from './Settings';




  
  function Home() {

    const onSearch = (value) => console.log(value);
    const [logicMeeting , setLogicMeeting] = useState(false);
    const [logicAssignedEmployees , setLogicAssignedEmployees] = useState(false);
    const [meetingCol , setMeetingCol] = useState("rgb(3, 122, 122)")
    const [AssignedEmployeeCol , setAssignedEmployeeCol] = useState("rgb(3, 122, 122)")

    function onclickMeeting(){
      if(!logicMeeting){
        setLogicMeeting(true)
        setMeetingCol("#8498B1")
        setAssignedEmployeeCol("rgb(3, 122, 122)")
      }
      else{
        setLogicMeeting(false)
        setMeetingCol("rgb(3, 122, 122)")
      }
     
    }

    function onclickAssignedEmployees(){
      if(!logicAssignedEmployees){
        setLogicAssignedEmployees(true)
        setAssignedEmployeeCol("#8498B1")
        setMeetingCol("rgb(3, 122, 122)")
      }
      else{
        setLogicAssignedEmployees(false)
        setAssignedEmployeeCol("rgb(3, 122, 122)")
      }
     
    }

    return (
      <div className='hFullScreen'>
      
      {/* Navigation Bar */}
        <div className="nFullContent">
            <div style={{height:'1vw'}}></div>
            <div className="nContent">
            <div style={{height:'5vw'}}>LOGO</div>
                <ul className="nItemList">
                    <li><ContainerOutlined/>Dashboard</li>
                    <li onClick={onclickAssignedEmployees} style={{color:AssignedEmployeeCol}}><ContainerOutlined/>Assigned Employees</li>
                    <li onClick={onclickMeeting} style={{color:meetingCol}}><ContainerOutlined/>Meetings</li>
                    <li><ContainerOutlined/>Reports</li>
                    <li><ContainerOutlined/>Monitor Employees</li>
                    <li><ContainerOutlined/>Settings</li>
                </ul>
            </div>
        </div>
        {/* End of Nav Bar */}
    
    {/* Content */}
        <div>

          {/* Header Part */}
          <div className="heContent">
             <div style={{width:'50%',height:'100%', position:'absolute', backgroundColor:'white'}}>
                <h1>Title</h1>
             </div>
             <div style={{width:'30%',height:'100%', marginLeft:'50%', position:'absolute', backgroundColor:'green'}}>
               <input className='heSearch' placeholder="input search text" onSearch={onSearch}  /> Search
             </div>
             <div style={{width:'20%',height:'100%', marginLeft:'80%',position:'absolute', backgroundColor:'white'}}>
             <h3>bell icon      image</h3>
             </div>
        
          </div>
          {/* End of Header part */}

          {/* Sub content - Meetings */}
          {logicMeeting&&<div className='hSubContent'>
              <Meetings/>
          </div>}

          {/* Sub content - Assigned Employees */}
          {logicAssignedEmployees&&<div className='hSubContent'>
              <AssignedEmployees/>
          </div>}


        </div>
    {/* End of the Content */}
      </div>
    );
  };
  
  export default Home;