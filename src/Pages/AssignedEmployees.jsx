import React from "react";

import EmployeeCard from './EmployeeCard';
import './Home.css';

function AssignedEmployees()
{
    return(
        <>
     <div>
        <div className='hLeftSubContent'>
           <h2 className='hSearchTitle'>Enter Employee ID</h2>
            <input type='text'/>
            <h2 className='hSearchTitle'>This Employee can add for those Projects</h2>
            </div>

            <div className='hRightSubContent'>
              <EmployeeCard/>
            </div>
        </div>
        
        </>
    );
}
export default AssignedEmployees;