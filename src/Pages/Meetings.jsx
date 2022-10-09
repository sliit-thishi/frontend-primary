import React, { useState } from "react";

import { AudioOutlined,CommentOutlined, UsergroupAddOutlined,ChromeOutlined, ExpandOutlined ,CalendarOutlined , PlusCircleOutlined, FieldTimeOutlined, VideoCameraOutlined  } from '@ant-design/icons';

import EmployeeCard from './EmployeeCard';
import './Home.css';
import workTrackerApi from "../api/workTrackerApi";




function Meetings()
{

  const [employees , setEmployees] = useState([])


  function sheduelMeeting(){
    const meeting = {org_emp_id:1}
  
    workTrackerApi.get("/addMeeting",{
      meeting:meeting,
      employees:employees
    })
    .then((res) => { 
        console.log("result - ",res.data)
        setEmployees(res.data);
    })

  .catch((err) => { 
    console.log(err)
  });
  }

    return(
        <>
        <div>
        <div className='hLeftSubContent'>
              <div className='hMeetingOptions'>
                  <div className='hOptions'>
                    <table>
                      <tr>
                        <td>
                          <div className='hOptionCard'>
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
                          <div className='hOptionCard'>
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
              <EmployeeCard/>
            </div>
        </div>
        </>
    );
}

export default Meetings;