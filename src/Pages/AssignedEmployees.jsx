import React, {useState} from "react";

import EmployeeCard from './EmployeeCard';
import ProjectCard from './ProjectCard';
import './Home.css';

function AssignedEmployees()
{
    const [logicProjectCard , setLogicProjectCard] = useState(false);

    function onclickSearch(){
        if(!logicProjectCard){
            setLogicProjectCard(true)

        }
        else{
          setLogicProjectCard(false)
        }
       
      }


    return(
        <>
     <div>
        <div className='hLeftSubContent'>
           <h2 className='hSearchTitle'>Enter Employee ID</h2>
            <input type='text'/> <button onClick={onclickSearch}>Search</button>
            <h2 className='hSearchTitle'>This Employee can add for those Projects</h2>
            {/* Need to apply logic here */}
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