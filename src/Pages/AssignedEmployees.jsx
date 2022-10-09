import React, {useState,useEffect} from "react";
import workTrackerApi from "../api/workTrackerApi";

import EmployeeCard from './EmployeeCard';
import ProjectCard from './ProjectCard';
import './Home.css';
import user from '../Resources/user.png';
import workTrackerApiCopy from "../api/workTrackerApiCopy";

function AssignedEmployees()
{
    const [logicProjectCard , setLogicProjectCard] = useState(false);
    const [logicShowProfile , setLogicShowProfile] = useState(false);
    const [employees , setEmployees] = useState([]);
    const [codes , setCodes] = useState(["1304351475","1304482685"])
    const [empId , setEmpId] = useState(0)
    const [projects , setProjects] = useState([]);

    function onclickSearch(){
      alert(empId)
      workTrackerApi.get("/getRate/"+empId,{

      })
      .then((res) => { 
          console.log("result - ",res.data)
          alert(res.data)
          //get ml data by front after that
          workTrackerApiCopy.get("/model?id="+res.data,{
          })
          .then((res) => { 
              console.log("result - ",res.data)
              alert(res.data)
              workTrackerApi.post("/getProjectsEmp",{
                codes:res.data
              })
              .then((res) => { 
                  console.log("result - ",res.data)
                  alert(res.data)
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

    useEffect(()=>{
        workTrackerApi.get("/getEmployees",{

        })
        .then((res) => { 
            console.log("result - ",res.data)
            setEmployees(res.data);
        })
  
      .catch((err) => { 
        console.log(err)
      });

      
          
        },[])


    return(
        <>
     <div>
       
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
              backgroundColor:'#066B66',
              border:'none'
            }}>Search</button>
            </div>}
            {logicShowProfile&&  <div>
              {employees.map((employeeList)=>(<div><table>
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


            <div className='hRightSubContent'>
              <EmployeeCard/>
            </div>
        </div>
        
        </>
    );
}
export default AssignedEmployees;