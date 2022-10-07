import React from 'react';
import EmployeeCard from './EmployeeCard';

import './NavBar.css';
import './Header.css';
import { ContainerOutlined } from '@ant-design/icons';
import './Home.css';
import videoIcon from '../Resources/Icon.png'
import { useState } from 'react';




  
  function Home() {

    const onSearch = (value) => console.log(value);
    const [logicMeeting , setLogicMeeting] = useState(false);
    const [meetingCol , setMeetingCol] = useState("rgb(3, 122, 122)")

    function onclickMeeting(){
      if(!logicMeeting){
        setLogicMeeting(true)
        setMeetingCol("yellow")
      }
      else{
        setLogicMeeting(false)
        setMeetingCol("rgb(3, 122, 122)")
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
                    <li><ContainerOutlined/>Assigned Employees</li>
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

            <div className='hLeftSubContent'>
              <div className='hMeetingOptions'>
                  <div className='hOptions'>
                    <table>
                      <tr>
                        <td>
                          <div className='hOptionCard'>
                            <img className='hOptionImg' src={videoIcon}></img>
                            <h2 className='hOptionTitle'>Start Meeting</h2>
                          </div>
                        </td>
                        <td>
                          <div className='hOptionCard'>
                            <img className='hOptionImg' src={videoIcon}></img>
                            <h2 className='hOptionTitle'>Start Meeting</h2>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='hOptionCard'>
                            <img className='hOptionImg' src={videoIcon}></img>
                            <h2 className='hOptionTitle'>Start Meeting</h2>
                          </div>
                        </td>
                        <td>
                          <div className='hOptionCard'>
                            <img className='hOptionImg' src={videoIcon}></img>
                            <h2 className='hOptionTitle'>Start Meeting</h2>
                          </div>
                        </td>
                      </tr>
                    </table>

                  </div>
                
              </div>

              <div className='hMeetingProgress'>
                        <div className='hProgressCard'>
                            <button className='hLeaveBtn'>Leave</button>
                            <h2 className='hProgressTitle'>Meeting Progress</h2>
                        </div>
              </div>
            </div>

            <div className='hRightSubContent'>
              <EmployeeCard/>
            </div>

          </div>}
          {/* End of Sub Content - Meetings*/}


        </div>
    {/* End of the Content */}
      </div>
    );
  };
  
  export default Home;