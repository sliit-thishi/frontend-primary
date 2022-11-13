import React, {useState,useEffect} from "react";
import workTrackerApi from "../api/workTrackerApi";

import {UserOutlined, PhoneOutlined,MessageOutlined, PaperClipOutlined, FileImageOutlined } from '@ant-design/icons';
import './Home.css';
import user from '../Resources/user.png';
import workTrackerApiCopy from "../api/workTrackerApiCopy";

function AssignedEmployees()
{
    const [logicProjectCard , setLogicProjectCard] = useState(false);
    const [logicShowProfile , setLogicShowProfile] = useState(false);
    const [logicChat , setLogicChat] = useState(false);
    const [emp , setEmp] = useState([]);
    const [codes , setCodes] = useState(["1304351475","1304482685"])
    const [empId , setEmpId] = useState(0)
    const [projects , setProjects] = useState([]);
    const [employees , setEmployees] = useState([]);
    const [employee , setEmployee] = useState({});
    const [emplyeeName , setEmployeeName] = useState("")
    const[meetingId , setMeetingId] = useState(1)
   const[empIdM , setEmpIdM] = useState(2) //Loged ones Id
    const[massages , setMassages] = useState([])
    const[massage , setMassage] = useState("Hello")
    const[receiveId , setReceiveId] = useState(1)
    const[sentLogic , setSentLogic] = useState(false)
    const[receiveLogic , setreceiveLogic] = useState(false)

    function getSent(){
        workTrackerApi.get("/getSentMassage/"+meetingId+"/"+empIdM,{
        })
        .then((res) => { 
            console.log("result - ",res.data)
            setSentLogic(true)
            setreceiveLogic(false)
            setMassages(res.data)
        })
      
      // Catch errors if any
      .catch((err) => { 
        console.log(err)
      });
      }
    
      function getReceive(){
        workTrackerApi.get("/getReceiveMassage/"+meetingId+"/"+empIdM,{
        })
        .then((res) => { 
            console.log("result - ",res.data)
            setSentLogic(false)
            setreceiveLogic(true)
            setMassages(res.data)
        })
      
      // Catch errors if any
      .catch((err) => { 
        console.log(err)
      });
      }
    
      function sendMassage(){
        
        workTrackerApi.post("/addMassage",{
          massage : massage,
          senderId : empIdM,
          meetingId : meetingId,
          receiverId : employee.empId
        })
        .then((res) => { 
            console.log("result - ",res.data)
            alert("Massage Sent : "+res.data)
        })
      
      // Catch errors if any
      .catch((err) => { 
        console.log(err)
      });
      }

    useEffect(()=>{
        workTrackerApi.get("/getEmployees/"+empIdM,{

        })
        .then((res) => { 
            console.log("result - ",res.data)
            setEmployees(res.data)
        })
  
      .catch((err) => { 
        console.log(err)
      });

      
          
        },[])

    
    function onclickChat(id) {
      if (!logicChat) {
          setLogicChat(true)
          workTrackerApi.get("/getEmployee/"+id,{
            
          })
          .then((res) => { 
              console.log("result - ",res.data)
              setEmployee(res.data)
          })
    
        .catch((err) => { 
          console.log(err)
        });
      } else {
          setLogicChat(false)
      }

  }

    function onclickSearch(){
      //alert(empId)
      workTrackerApi.get("/getRate/"+empId,{

      })
      .then((res) => { 
          console.log("result - ",res.data)
         // alert(res.data)
          //get ml data by front after that
          workTrackerApiCopy.get("/model?id="+res.data,{
          })
          .then((res) => { 
              console.log("result - ",res.data)
              //alert(res.data)
              workTrackerApi.post("/getProjectsEmp",{
                codes:res.data
              })
              .then((res) => { 
                  console.log("result - ",res.data)
                 // alert(res.data)
                  setProjects(res.data)
                  setLogicProjectCard(true)
              })
        
            .catch((err) => { 
              console.log(err)
            });
          })
    
        .catch((err) => { 
          console.log(err)
        });
          
  
  
      })

    .catch((err) => { 
      console.log(err)
    });

        // if(!logicProjectCard){
        //     setLogicProjectCard(true)
        //     setLogicShowProfile(true)

        // }
        // else{
        //   setLogicProjectCard(false)
        // }
       
      } 
    
      function onclickAddEmpToProject(pId){
        workTrackerApi.put("/addEmpProject/"+pId+"/"+empId,{

        })
        .then((res) => { 
            console.log("result - ",res.data)
            alert(res.data)
        })
  
      .catch((err) => { 
        console.log(err)
      });

      }

    // useEffect(()=>{
    //     workTrackerApi.get("/getEmployees/"+empIdM,{

    //     })
    //     .then((res) => { 
    //         console.log("result - ",res.data)
    //         setEmp(res.data);
    //     })
  
    //   .catch((err) => { 
    //     console.log(err)
    //   });

      
          
    //     },[])


    return(
        <>
     <div>
     {!logicChat&& 
      <div className='hLeftSubContent'>
        {!logicShowProfile&& <div className='hSearchContent'>
           <h2 className='hOptionTitle' style={{textAlign:'left', paddingLeft:'2vw'}}>Enter Employee ID</h2>
            <input type='text' style={{
              height:'2.6vw',
              width:'24vw',
              borderRadius:'6px',
              border:'none',
              boxShadow:'0.2vw 0.2vw #d5dddd',
              marginLeft:'2vw',
            }}
            value={empId}
    onChange={(e)=>setEmpId(e.target.value)}
            /> <button onClick={onclickSearch}
            style={{
              height:'3vw',
              width:'7vw',
              color:'white',
              borderRadius:'7px',
              fontSize:'0.9vw',
              backgroundColor:'#066B66',
              border:'none'
            }}>Search</button>
            </div>}
            {logicShowProfile&&  <div>
              {emp.map((employeeList)=>(<div><table>
                <tr>
                  <td>
                    <img src={user}
                    style={{height:'6vw', width:'6vw', marginLeft:'2vw'}}/>
                  </td>
                  <td><h2 className='hOptionTitle' style={{paddingLeft:'2vw'}}>{employeeList.EmpNo}<br/> <span style={{fontSize:'1vw', fontWeight:'600'}}>{employeeList.EmpPosition}</span></h2> </td>
                  <td><h2 className='hOptionTitle' style={{fontWeight:'450', fontSize:'1.2vw', paddingLeft:'2vw'}}>{employeeList.EmpName}</h2></td>
                </tr>
              </table>  </div>   ))}
            </div>}

            <h2 className='hOptionTitle'>This Employee can add for those Projects</h2>
         
            {logicProjectCard&&  <div>
              {projects.map((projectList)=>(
         <div
        style={{
            height:'4.5vw',
            width:'38vw',
            borderRadius:'10px',
            margin: '3vw 0vw 0vw 5vw',
            boxShadow:'0.3vw 0.3vw #d5dddd',
        }}
        >
            <table>
                <tr>
                    <td >
                      <div style={{width:'15vw'}}> <h2 className='hOptionTitle'
                       style={{fontWeight:'500', fontSize:'1.2vw'}}> {projectList.name} </h2></div>
                    </td>
                    <td style={{paddingLeft:'16vw'}}>
                        <button type="primary"
                        style={{height:'2.4vw',
                         width:'6vw', 
                         color:'white', 
                         backgroundColor:'#066B66',
                         borderRadius:'7px',
                         border:'none'
                        }}
                        onClick={e=>onclickAddEmpToProject(projectList.pid)}
                        >ADD</button>
                    </td>
                </tr>
            </table>

        </div>
         ))}
            </div>}
            </div>
}

{logicChat&& 
      <div className='hLeftSubContent'>
        <h1 className='hOptionTitle' style={{float: 'left', paddingLeft: '2vw'}}>Chat</h1>


          <div>
          <button className="scheduleBtn" style={{width:'8vw', height:'2.2vw', marginLeft:'20vw'}} onClick={getReceive}>Received</button>
          <button className="scheduleBtn" style={{width:'8vw', height:'2.2vw', marginLeft:'2vw'}} onClick={getSent}>Sent</button>
          </div> 
          <div>
            {receiveLogic? <div>
                {massage.length!=0 && massages.map((msg)=>(
                <p className="msgBody"> <span className="msg"> From: {msg.senderName}...</span> <span className="msg1">{msg.massage}</span> </p>
            ))}
                </div>:<div>
                {sentLogic && <div>
                {massage.length!=0 && massages.map((msg)=>(
                <p className="msgBody"><span className="msg">To: {msg.receiverName}... </span> <span className="msg1">{msg.massage} </span></p>
            ))}
                </div>}
                    </div>}  </div>         

            <div style={{marginLeft:'3vw', marginTop:'24vw', position:'fixed'}}>
              <table>
                <tr>
                  <td>
                    <input type="text" style={{height:'4vw', width:'30vw', borderRadius:'0.8vw', borderColor:'#066B66', borderWidth:'0.1vw'}} value={massage} onChange={(e)=>setMassage(e.target.value)}/>
                  </td>
                  <td><PaperClipOutlined
                                 style={{fontSize:'2vw', color:'#066B66', paddingTop:'0.5vw', marginLeft:'0.4vw'}}/></td>
                  <td><FileImageOutlined 
                                 style={{fontSize:'2vw', color:'#066B66', paddingTop:'0.5vw', marginLeft:'0.4vw'}}/></td>
                                 <td><button className="scheduleBtn" style={{width:'7vw', height:'2.4vw', marginLeft:'1.5vw', backgroundColor:'#066B66', color:'white', border:'none'}} onClick={sendMassage}>Send </button></td>
                </tr>
                </table>
            </div>
            <div style={{height:'6.5vw', marginTop:'3vw'}}>
            <table >
                <tr>
                    <td>
                    <UserOutlined 
                        style={{fontSize:'2.2vw',  color:'#1FAFA8'}} />
                    </td>
                    <td>
                        <h3 style={{fontSize:'1.4vw', color:'#066B66', fontWeight:'600'}}>{employee.name}</h3>
                      
                    </td>
                   
                   
                </tr>
            </table>
            </div>
        </div>
}



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
                                
                                <MessageOutlined onClick={()=>onclickChat(employeeList.empId)}
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
export default AssignedEmployees;