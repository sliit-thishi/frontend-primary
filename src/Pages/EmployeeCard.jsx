import React from "react";
import {UserOutlined, PhoneOutlined,MessageOutlined} from '@ant-design/icons';

function EmployeeCard()
{
    return(
        <>
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
            <table>
                <tr>
                    <td>
                    <UserOutlined 
                        style={{fontSize:'2vw',  color:'#1FAFA8', marginLeft:'1vw'}} />
                    </td>
                    <td>
                        <h3 style={{fontSize:'1.2vw', color:'#066B66', fontWeight:'600'}}>Employee Name <br/><span style={{fontSize:'0.9vw', color:'#066B66', fontWeight:'550'}}>Software Engineer</span></h3>
                      
                    </td>
                    <td>
                        <div>
                            <button style={{height:'2vw', width:'8vw', borderRadius:'1vw', fontSize:'0.8vw', color:'#066B66', marginLeft:'2.4vw'}}>Add to Meeting</button>
                        </div>
                        <table>
                            <tr>
                                <td>
                                <PhoneOutlined 
                                style={{height:'1.5vw', width:'3vw', borderRadius:'0.5vw', fontSize:'1vw', color:'white', backgroundColor:'#066B66', paddingTop:'0.5vw', marginLeft:'2.7vw'}}/>
                                </td>
                                <td>
                                <MessageOutlined 
                                 style={{height:'1.5vw', width:'3vw', borderRadius:'0.5vw', fontSize:'1vw', color:'white', backgroundColor:'#066B66', paddingTop:'0.5vw', marginLeft:'0.4vw'}}/>
                                </td>
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