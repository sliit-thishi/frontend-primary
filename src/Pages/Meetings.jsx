import React, { useEffect, useState } from "react";
import {UserOutlined, PhoneOutlined,MessageOutlined} from '@ant-design/icons';

import { AudioOutlined,CommentOutlined, UsergroupAddOutlined,ChromeOutlined, ExpandOutlined ,CalendarOutlined , PlusCircleOutlined, FieldTimeOutlined, VideoCameraOutlined  } from '@ant-design/icons';
import { Link } from "react-router-dom";
import MonitorEmployees from './MonitorEmployees';
import './Home.css';
import workTrackerApi from "../api/workTrackerApi";
import {useNavigate} from 'react-router-dom';
import workTrackerApiCopy from "../api/workTrackerApiCopy";
import ScheduleMeeting from "./ScheduleMeeting";




function Meetings()
{

  const [employeesAdd , setEmployeesAdd] = useState([])
  const [employees , setEmployees] = useState([]);
  const [addEmpLogic , setAddEmpLogic] = useState(false)
  const [startMeetingLogic , setStartMLogic] = useState(false)
  const [scheduleMeetingLogic , setScheduleMeetingLogic] = useState(false)

  const navigate = useNavigate();


  useEffect(()=>{
    setStartMLogic(false)
    workTrackerApi.get("/getEmployees",{

    })
    .then((res) => { 
        console.log("result - ",res.data)
        setEmployees(res.data)
    })

  .catch((err) => { 
    console.log(err)
  });

  
      
    },[])


  function scheduelMeeting(){
    setScheduleMeetingLogic(true);
  }

  function startMeeting(){
    workTrackerApi.put("/startMeeting/"+1,{

    })
    .then((res) => { 
        console.log("result - ",res.data)
       // alert(res.data)
        if(res.data=="started"){
          
          setStartMLogic(true)
        }
    })

  .catch((err) => { 
    console.log(err)
  });
  }

    return(
        <>
        <div>
        {!startMeetingLogic && !scheduleMeetingLogic && <div>
        <div className='hLeftSubContent'>
              <div className='hMeetingOptions'>
                  <div className='hOptions'>
                    <table>
                      <tr>
                        <td>
                          <div className='hOptionCard' onClick={startMeeting}>
                          <VideoCameraOutlined  
                                  style={{fontSize:'4vw',  color:'#1FAFA8', margin:'1vw 0vw 0vw 8vw'}} />
                            <h2 className='hOptionTitle'>Start Meeting</h2>
                          </div>
                        </td>
                        <td>
                          <div className='hOptionCard'>
                          <PlusCircleOutlined   
                                  style={{fontSize:'4vw',  color:'#1FAFA8', margin:'1vw 0vw 0vw 8vw'}} />
                            <h2 className='hOptionTitle'>Join Meeting</h2>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='hOptionCard' onClick={scheduelMeeting}>
                          <CalendarOutlined  
                                  style={{fontSize:'4vw',  color:'#1FAFA8', margin:'1vw 0vw 0vw 8vw'}} />
                            <h2 className='hOptionTitle'>Scheduled Meetings</h2>
                          </div>
                        </td>
                        <td>
                          <div className='hOptionCard'>
                          <FieldTimeOutlined  
                                  style={{fontSize:'4vw',  color:'#1FAFA8', margin:'1vw 0vw 0vw 8vw'}} />
                            <h2 className='hOptionTitle'>Meeting History</h2>
                          </div>
                        </td>
                      </tr>
                    </table>

                  </div>
                
              </div>

              <div className='hMeetingProgress'>
                        <div className='hProgressCard'>
                            <ExpandOutlined 
                            style={{fontSize:'2vw',  color:'#1FAFA8', float:'left', marginLeft:'2vw'}} />
                            <button className='hLeaveBtn'>Leave</button>
                            <h2 className='hProgressTitle'>Meeting Inprogress</h2>
                            <center>
                              <table>
                                <tr>
                                <td>
                                  <UsergroupAddOutlined 
                                      style={{fontSize:'2vw',  color:'#1FAFA8', marginLeft:'2vw'}} />
                                  </td>
                                  <td>
                                  <AudioOutlined 
                                      style={{fontSize:'2vw',  color:'#1FAFA8', marginLeft:'2vw'}} />
                                  </td>
                                  <td>
                                  <ChromeOutlined  
                                      style={{fontSize:'2vw',  color:'#1FAFA8', marginLeft:'2vw'}} />
                                  </td>
                                  <td>
                                  <CommentOutlined 
                                      style={{fontSize:'2vw',  color:'#1FAFA8', marginLeft:'2vw'}} />
                                  </td>

                                </tr>
                              </table>
                            </center>
                        </div>
              </div>
            </div>

            <div className='hRightSubContent'>
            {employees.map((employeeList)=>(
        <div
        style={{
            height:'6vw',
            width:'24vw',
            borderRadius:'10px',
            backgroundColor:'#F4F9F8',
            margin: '1vw 0vw 0vw 1vw',
            boxShadow: '0.1vw 0.1vw #B5D3CE',
            cursor: 'pointer'
        }}
        >
          <div style={{height:'5.5vw'}}>
            <table >
                <tr>
                    <td>
                    <UserOutlined 
                        style={{fontSize:'2vw',  color:'#1FAFA8', marginLeft:'1vw'}} />
                    </td>
                    <td>
                        <h3 style={{fontSize:'1.2vw', color:'#066B66', fontWeight:'600'}}>{employeeList.name} <br/><span style={{fontSize:'0.9vw', color:'#066B66', fontWeight:'550'}}>{employeeList.empPosition} </span></h3>
                      
                    </td>
                    <td>
                        
                      
                    </td>
                    <td>

                    <PhoneOutlined 
                                style={{height:'1.5vw', width:'3vw', borderRadius:'0.5vw', fontSize:'1vw', color:'white', backgroundColor:'#066B66', paddingTop:'0.5vw'}}/>
                                
                                <MessageOutlined 
                                 style={{height:'1.5vw', width:'3vw', borderRadius:'0.5vw', fontSize:'1vw', color:'white', backgroundColor:'#066B66', paddingTop:'0.5vw', marginLeft:'0.4vw'}}/>
                    </td>
                </tr>
            </table>
            </div>

        </div>
        ))}
            </div>
        </div>
        }
         {startMeetingLogic && 
            <div>
              <MonitorEmployees/>
            </div>
         }
          {scheduleMeetingLogic && 
            <div>
              <ScheduleMeeting/>
            </div>
         }
       
        


</div>
        </>
    );
}

export default Meetings;