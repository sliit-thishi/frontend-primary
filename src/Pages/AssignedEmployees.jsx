import React, {useState} from "react";

import EmployeeCard from './EmployeeCard';
import ProjectCard from './ProjectCard';
import './Home.css';
import user from '../Resources/user.png';

function AssignedEmployees()
{
    const [logicProjectCard , setLogicProjectCard] = useState(false);
    const [logicShowProfile , setLogicShowProfile] = useState(false);

    function onclickSearch(){
        if(!logicProjectCard){
            setLogicProjectCard(true)
            setLogicShowProfile(true)

        }
        else{
          setLogicProjectCard(false)
        }
       
      }


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
              <table>
                <tr>
                  <td>
                    <img src={user}
                    style={{height:'6vw', width:'6vw', marginLeft:'2vw'}}/>
                  </td>
                  <td><h2 className='hOptionTitle' style={{paddingLeft:'2vw'}}>175745-7382-A<br/> <span style={{fontSize:'1vw', fontWeight:'600'}}>Software Engineer</span></h2> </td>
                  <td><h2 className='hOptionTitle' style={{fontWeight:'450', fontSize:'1.2vw', paddingLeft:'2vw'}}>Employee Name</h2></td>
                </tr>
              </table>
            </div>}

            <h2 className='hOptionTitle'>This Employee can add for those Projects</h2>
         
            {logicProjectCard&&  <div>
                <ProjectCard/>
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