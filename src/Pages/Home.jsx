import React, {useRef} from 'react';
import * as htmlToImage from 'html-to-image';
import {CameraOutlined} from '@ant-design/icons'

import './NavBar.css';
import './Header.css';
import './Home.css';

import logo from '../Resources/1.png';
import {ContainerOutlined, SearchOutlined, BellOutlined, UserOutlined} from '@ant-design/icons';
import {useState} from 'react';

import Meetings from './Meetings';
import AssignedEmployees from './AssignedEmployees';
import Dashboard from './Dashboard';
import MonitorEmployees from './MonitorEmployees';
import Reports from './Reports';
import Settings from './Settings';
import ScreenRecordingHome from "./ScreenRecordingHome";
import ScreenRecording from "./ScreenRecording";


function Home() {

    const onSearch = (value) => console.log(value);
    const [logicMeeting, setLogicMeeting] = useState(false);
    const [logicAssignedEmployees, setLogicAssignedEmployees] = useState(false);
    const [logicMonitorEmployees, setLogicMonitorEmployees] = useState(false);
    const [monitorEmployeeCol, setMonitorEmployeeCol] = useState(" #1FAFA8")
    const [meetingCol, setMeetingCol] = useState(" #1FAFA8")
    const [AssignedEmployeeCol, setAssignedEmployeeCol] = useState(" #1FAFA8")
    const [logicTitle, setLogicTitle] = useState("");

    function onclickMeeting() {
        if (!logicMeeting) {
          setLogicMonitorEmployees(false)
            setLogicAssignedEmployees(false)
            setLogicMeeting(true)
            setMeetingCol("#066B66")
            setAssignedEmployeeCol(" #1FAFA8")
            setMonitorEmployeeCol(" #1FAFA8")
            setLogicTitle("Meeting")
        } else {
            setLogicMeeting(false)
            setMeetingCol(" ")
            setLogicTitle("")
        }

    }

    function onclickAssignedEmployees() {
        if (!logicAssignedEmployees) {
            setLogicAssignedEmployees(true)
            setLogicMonitorEmployees(false)
            setLogicMeeting(false)
            setAssignedEmployeeCol("#066B66")
            setMeetingCol("#1FAFA8")
            setMonitorEmployeeCol("#1FAFA8")
            setLogicTitle("Assigned_Employees")
        } else {
            setLogicAssignedEmployees(false)
            setAssignedEmployeeCol("#1FAFA8")
            setLogicTitle("")
        }

    }

    function onclickMonitorEmployees() {
      if (!logicMonitorEmployees) {
          setLogicMonitorEmployees(true)
          setLogicMeeting(false)
          setLogicAssignedEmployees(false)
          setMonitorEmployeeCol("#066B66")
          setMeetingCol("#1FAFA8")
          setAssignedEmployeeCol("#1FAFA8")
          setLogicTitle("Monitor_Employees")
      } else {
          setLogicMonitorEmployees(false)
          setMonitorEmployeeCol("#1FAFA8")
          setLogicTitle("")
      }

  }

    const domEl = useRef(null);

    const downloadImage = async () => {
        const dataUrl = await htmlToImage.toPng(domEl.current);

        // download image
        const link = document.createElement('a');
        link.download = "html-to-img.png";
        link.href = dataUrl;
        link.click();
    }

    return (
        <div className='hFullScreen' id="domEl" ref={domEl}>
            {/*<button className="screenshot" onClick={downloadImage}><CameraOutlined*/}
            {/*    style={{fontSize: '20px', color: '#08c'}}/></button>*/}
            {/*<button className="screenshot1"><ScreenRecording*/}
            {/*    screen={true}*/}
            {/*    audio={false}*/}
            {/*    video={false}*/}
            {/*    downloadRecordingPath="Screen_Recording_Demo"*/}
            {/*    downloadRecordingType="mp4"*/}
            {/*></ScreenRecording></button>*/}


            {/* Navigation Bar */}
            <div className="nFullContent">
                <div style={{height: '1vw'}}></div>
                <div className="nContent">
                    <div style={{height: '8vw'}}>
                        <img src={logo} style={{height: '13vw', width: '17vw'}}></img>
                    </div>
                    <ul className="nItemList">
                        <li><ContainerOutlined/>Dashboard</li>
                        <li onClick={onclickAssignedEmployees} style={{color: AssignedEmployeeCol}}><ContainerOutlined/>Assigned
                            Employees
                        </li>
                        <li onClick={onclickMeeting} style={{color: meetingCol}}><ContainerOutlined/>Meetings</li>
                        <li><ContainerOutlined/>Reports</li>
                        <li onClick={onclickMonitorEmployees} style={{color: monitorEmployeeCol}}><ContainerOutlined/>Monitor Employees</li>
                        <li><ContainerOutlined/>Settings</li>
                    </ul>
                </div>
            </div>
            {/* End of Nav Bar */}

            {/* Content */}
            <div>

                {/* Header Part */}
                <div className="heContent">
                    <div style={{width: '40%', height: '100%', position: 'absolute', backgroundColor: '#F2F7F6'}}>
                    {logicTitle == "Meeting" && <h1 className='hOptionTitle' style={{float: 'left', paddingLeft: '2vw'}}>Meetings</h1>}
                    {logicTitle == "Assigned_Employees" && <h1 className='hOptionTitle' style={{float: 'left', paddingLeft: '2vw'}}>Assigned Employees</h1>}
                    {logicTitle == "Monitor_Employees" && <h1 className='hOptionTitle' style={{float: 'left', paddingLeft: '2vw'}}>Monitor Employees</h1>}
                    </div>
                    <div style={{width: '40%', height: '100%', marginLeft: '40%', position: 'absolute'}}>
                        <table>
                            <tr>
                                <td><input className='heSearch' placeholder="input search text"/></td>
                                <td style={{paddingTop: '1.2vw'}}><SearchOutlined
                                    onClick={onSearch}
                                    style={{
                                        backgroundColor: '#1FAFA8',
                                        fontSize: '2vw',
                                        height: '2.2vw',
                                        width: '4vw',
                                        borderRadius: '1vw',
                                        color: 'white',
                                        paddingTop: '0.4vw'
                                    }}
                                /></td>
                            </tr>
                        </table>
                    </div>
                    <div style={{
                        width: '20%',
                        height: '100%',
                        marginLeft: '80%',
                        position: 'absolute',
                        backgroundColor: '#F2F7F6'
                    }}>
                        <h3><BellOutlined
                            style={{fontSize: '2.5vw', color: '#1FAFA8', marginLeft: '4vw'}}
                        />
                            <UserOutlined
                                style={{fontSize: '2.5vw', color: '#1FAFA8', marginLeft: '2vw'}}/>
                        </h3>
                    </div>

                </div>
                {/* End of Header part */}

                {/* Sub content - Meetings */}
                {logicMeeting && <div className='hSubContent'>
                    <Meetings/>
                </div>}

                {/* Sub content - Assigned Employees */}
                {logicAssignedEmployees && <div className='hSubContent'>
                    <AssignedEmployees/>
                </div>}

             {/* Sub content - Monitor Employees */}
             {logicMonitorEmployees && <div className='hSubContent'>
                    <MonitorEmployees/>
                </div>}

            </div>
            {/* End of the Content */}
        </div>
    );
};

export default Home;