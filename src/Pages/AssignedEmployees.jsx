import React, {useState} from "react";

import EmployeeCard from './EmployeeCard';
import ProjectCard from './ProjectCard';
import './Home.css';

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
           <h2 className='hSearchTitle'>Enter Employee ID</h2>
            <input type='text'/> <button onClick={onclickSearch}>Search</button>
            </div>}
            {logicShowProfile&&  <div>
                <h1>Employee Name</h1>
            </div>}

            <h2 className='hSearchTitle'>This Employee can add for those Projects</h2>
         
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