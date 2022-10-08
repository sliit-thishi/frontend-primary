import React from "react";

import user from '../Resources/user.png';

function ScreenshotCard()
{
    return (
        <>
        <div style={{
            height:'16vw',
            width:'20vw',
            borderRadius:'10px',
            backgroundColor:'#F4F9F8',
            margin: '1vw 0vw 0vw 1vw',
            boxShadow: '0.1vw 0.1vw #B5D3CE',
            cursor: 'pointer',
        }}>

            <div>
                <table>
                    <tr>
                        <td>
                            <img src={user} style={{height:'4vw', width:'4vw'}}/>
                        </td>
                        <td>
                        <h3 style={{fontSize:'1.2vw', color:'#066B66', fontWeight:'600'}}>Employee Name <br/><span style={{fontSize:'0.9vw', color:'#066B66', fontWeight:'550'}}>Software Engineer</span></h3>
                        </td>
                    </tr>
                </table>

            </div>
            <hr/>

            {/* Screenshot image */}
            <div >

            </div>
        </div>
        </>
    );
}
export default ScreenshotCard;