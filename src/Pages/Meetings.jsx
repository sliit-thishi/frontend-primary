import React from "react";

import EmployeeCard from './EmployeeCard';
import videoIcon from '../Resources/Icon.png';
import './Home.css';

function Meetings()
{
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
                            <img className='hOptionImg' src={videoIcon}></img>
                            <h2 className='hOptionTitle'>Start Meeting</h2>
                          </div>
                        </td>
                        <td>
                          <div className='hOptionCard'>
                            <img className='hOptionImg' src={videoIcon}></img>
                            <h2 className='hOptionTitle'>Join Meeting</h2>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='hOptionCard'>
                            <img className='hOptionImg' src={videoIcon}></img>
                            <h2 className='hOptionTitle'>Scheduled Meetings</h2>
                          </div>
                        </td>
                        <td>
                          <div className='hOptionCard'>
                            <img className='hOptionImg' src={videoIcon}></img>
                            <h2 className='hOptionTitle'>Meeting History</h2>
                          </div>
                        </td>
                      </tr>
                    </table>

                  </div>
                
              </div>

              <div className='hMeetingProgress'>
                        <div className='hProgressCard'>
                            <button className='hLeaveBtn'>Leave</button>
                            <h2 className='hProgressTitle'>Meeting Inprogress</h2>
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