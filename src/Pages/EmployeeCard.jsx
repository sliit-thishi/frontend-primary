import React, {useState, useEffect} from "react";
import {UserOutlined, PhoneOutlined,MessageOutlined} from '@ant-design/icons';
import workTrackerApi from "../api/workTrackerApi";

function EmployeeCard()
{
    const [employees , setEmployees] = useState([]);

    useEffect(()=>{
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

    return(
        <>
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
                        <h3 style={{fontSize:'1.2vw', color:'#066B66', fontWeight:'600'}}>{employeeList.empName} <br/><span style={{fontSize:'0.9vw', color:'#066B66', fontWeight:'550'}}>{employeeList.empPosition} </span></h3>
                      
                    </td>
                    <td>
                        <div>
                            <button style={{height:'2vw', width:'8vw', borderRadius:'1vw', fontSize:'0.8vw',top:'0', color:'#066B66', marginLeft:'2.4vw', border:'none', boxShadow:'0.1vw 0.21vw  #d5dddd'}} >Add to Meeting</button>
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
        </>
    );
}

export default EmployeeCard;