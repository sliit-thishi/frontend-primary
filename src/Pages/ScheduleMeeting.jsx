import React from "react";
import { Switch } from 'antd';
import { AudioOutlined,CommentOutlined, UsergroupAddOutlined,ChromeOutlined, ExpandOutlined ,CalendarOutlined , PlusCircleOutlined, FieldTimeOutlined, VideoCameraOutlined  } from '@ant-design/icons';
import {UserOutlined, PhoneOutlined,MessageOutlined} from '@ant-design/icons';
import './Home.css';
import workTrackerApi from "../api/workTrackerApi";
import { useState } from "react";
import { useEffect } from "react";


function ScheduleMeeting(){

    const [employeesAdd , setEmployeesAdd] = useState([])
  const [employees , setEmployees] = useState([]);
  const [addEmpLogic , setAddEmpLogic] = useState(false)
  const[meetingCode , setMeetingCode] = useState("")

    useEffect(()=>{
        // setStartMLogic(false)
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

        function createCode(){
            var letters = "ABCDEFGHIJ1234567890asfjmklibndes"
            var code = ""
            for(let i=0; i<12; i++){
                let j = Math.floor(Math.random() * letters.length)
                code+=letters[j]
            }
            // alert(code)
            setMeetingCode(code)
        }

    function scheduelMeeting(){
    
        if(!addEmpLogic){
          alert("add employees first")
          return
        }
        if(meetingCode ==""){
            alert("create a code for meeting")
            return
        }
        const meeting = {org_emp_id:1}
      
        workTrackerApi.post("/addMeeting",{
          meeting:meeting,
          employees:employeesAdd
        })
        .then((res) => { 
            console.log("result - ",res.data)
            alert("Meeting has "+res.data)
            window.location.reload()
        })
    
      .catch((err) => { 
        console.log(err)
      });
      }

      function addEmpMeeting(id){
        employeesAdd.push(id)
        alert("Added Employee To The Meeting")
        setAddEmpLogic(true)
      } 

    return(
        <>
        <div className="scheduleMeetingBox">
        <h3 className="label">Add Topic</h3>
            <input type="text" style={{height:'2.2vw', width:'35vw', borderRadius:'0.7vw', borderWidth:'0.1vw', borderColor:'#066B66', marginLeft:'2vw'}}/>
        <table>
            <tr>
               <td> <h3 className="label" >Set Date</h3>
                    <input type="date" style={{height:'2.2vw', width:'10vw', borderRadius:'0.7vw', borderWidth:'0.1vw', borderColor:'#066B66', marginLeft:'2vw'}}/>
                </td>
                <td>
                <h3 className="label">Set Time</h3>
                    <input type="time" style={{height:'2.2vw', width:'10vw', borderRadius:'0.7vw', borderWidth:'0.1vw', borderColor:'#066B66', marginLeft:'3vw'}}/>
                </td>
                <td>
                <h3 className="label">Time Zone</h3>
                    <select style={{height:'2.2vw', width:'15vw', borderRadius:'0.7vw', borderWidth:'0.1vw', borderColor:'#066B66', marginLeft:'3vw'}}>
                        <option value={1}> Time Zone 1</option>
                        <option value={1}> Time Zone 2</option>
                        <option value={1}> Time Zone 3</option>
                        <option value={1}> Time Zone 4</option>
                    </select>
                    </td>
            </tr>
            </table>
        <h3 className="label">Video and Audio</h3>
        <input type="checkbox" className="scheduleCheckbox"/><label className="label" style={{fontWeight:'500', paddingLeft:'0.5vw'}}> Audio</label>
        <input type="checkbox" className="scheduleCheckbox"/> <label className="label" style={{fontWeight:'500', paddingLeft:'0.5vw'}}> Video</label>
        <h3 className="label">Invite Link</h3>
        <table>
            <tr>
                <td>  <button className="scheduleBtn" style={{width:'8vw', height:'2.2vw', marginLeft:'2vw'}} onClick={createCode}>Create Code</button> </td>
                <td><input type="text" style={{height:'2.2vw', width:'30vw', borderRadius:'1vw', borderWidth:'0.1vw', borderColor:'#066B66', marginLeft:'2vw'}} value={meetingCode}/></td>
                </tr></table>
        <h3 className="label">Added Employees</h3>
        <button className="scheduleBtn" style={{marginLeft:'30vw'}} onClick={scheduelMeeting}>Save</button> <button className="scheduleBtn" style={{backgroundColor:'transparent', color:'black'}}>Cancel</button>
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
                        <div>
                            <button style={{height:'2vw', width:'8vw', borderRadius:'1vw', fontSize:'0.8vw',top:'0', color:'#066B66', marginLeft:'2.4vw', border:'none', boxShadow:'0.1vw 0.21vw  #d5dddd'}} onClick={e=>addEmpMeeting(employeeList.empId)}>Add to Meeting</button>
                        </div>
                      
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
        </>
    );
}

export default ScheduleMeeting;