import React from "react";
import './Home.css';

function ProjectCard()
{
    return(
        <>
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
                       style={{fontWeight:'500', fontSize:'1.2vw'}}> Project Name </h2></div>
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
                        >ADD</button>
                    </td>
                </tr>
            </table>

        </div>
        </>
    );
}
export default ProjectCard;