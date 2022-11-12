import React from "react";
import { Switch } from 'antd';

import './Home.css';


function ScheduleMeeting(){
    return(
        <>
        <div className="scheduleMeetingBox">
        <h3 className="label">Add Topic</h3>
            <input type="text" style={{height:'2.2vw', width:'35vw', borderRadius:'0.7vw', borderWidth:'0.1vw', borderColor:'#066B66', marginLeft:'2vw'}}/>
        <table>
            <tr>
               <td> <h3 className="label" >Set Date</h3>
                    <input type="date" style={{height:'2.2vw', width:'10vw', borderRadius:'0.7vw', borderWidth:'0.1vw', borderColor:'#066B66', marginLeft:'2vw'}}/>
                </td>
                <td>
                <h3 className="label">Set Time</h3>
                    <input type="time" style={{height:'2.2vw', width:'10vw', borderRadius:'0.7vw', borderWidth:'0.1vw', borderColor:'#066B66', marginLeft:'3vw'}}/>
                </td>
                <td>
                <h3 className="label">Time Zone</h3>
                    <select style={{height:'2.2vw', width:'15vw', borderRadius:'0.7vw', borderWidth:'0.1vw', borderColor:'#066B66', marginLeft:'3vw'}}>
                        <option value={1}> Time Zone 1</option>
                        <option value={1}> Time Zone 2</option>
                        <option value={1}> Time Zone 3</option>
                        <option value={1}> Time Zone 4</option>
                    </select>
                    </td>
            </tr>
            </table>
        <h3 className="label">Video and Audio</h3>
        <input type="checkbox" className="scheduleCheckbox"/><label className="label" style={{fontWeight:'500', paddingLeft:'0.5vw'}}> Audio</label>
        <input type="checkbox" className="scheduleCheckbox"/> <label className="label" style={{fontWeight:'500', paddingLeft:'0.5vw'}}> Video</label>
        <h3 className="label">Invite Link</h3>
        <table>
            <tr>
                <td>  <button className="scheduleBtn" style={{width:'8vw', height:'2.2vw', marginLeft:'2vw'}}>Create Link</button> </td>
                <td><input type="text" style={{height:'2.2vw', width:'30vw', borderRadius:'1vw', borderWidth:'0.1vw', borderColor:'#066B66', marginLeft:'2vw'}}/></td>
                <td> <button className="scheduleBtn" style={{width:'8vw', height:'2.2vw', marginLeft:'2vw', backgroundColor:'transparent', color:'black'}}>Send </button></td>
                </tr></table>
        <h3 className="label">Added Employees</h3>
        <button className="scheduleBtn" style={{marginLeft:'30vw'}}>Save</button> <button className="scheduleBtn" style={{backgroundColor:'transparent', color:'black'}}>Cancel</button>
        </div>
        </>
    );
}

export default ScheduleMeeting;