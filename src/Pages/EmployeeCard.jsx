import React from "react";

function EmployeeCard()
{
    return(
        <>
        <div
        style={{
            height:'5vw',
            width:'23vw',
            borderRadius:'10px',
            backgroundColor:'aqua',
            margin: '1vw 0vw 0vw 2vw'
        }}
        >
            <table>
                <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>
                        <div>
                            Add to meeting
                        </div><br/>
                        <table>
                            <tr>
                                <td>Call</td>
                                <td>Message</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

        </div>
        </>
    );
}

export default EmployeeCard;