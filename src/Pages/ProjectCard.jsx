import React from "react";

function ProjectCard()
{
    return(
        <>
        <div
        style={{
            height:'4vw',
            width:'38vw',
            backgroundColor:'yellow',
            borderRadius:'10px',
            marginLeft: '5vw'
        }}
        >
            <table>
                <tr>
                    <td>
                       <p> Project Name </p>
                    </td>
                    <td style={{paddingLeft:'25vw'}}>
                        <button type="primary">ADD</button>
                    </td>
                </tr>
            </table>

        </div>
        </>
    );
}
export default ProjectCard;