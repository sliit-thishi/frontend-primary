import React from "react";
import { AudioOutlined,VideoCameraOutlined  } from '@ant-design/icons';
import './Home.css';

function ScreenRecordingHome()
{
    return(
        <>
        <div>
             <div className="hRecordingContent">
                <div>
                    <table style={{float:'right'}}>
                        <tr><td><VideoCameraOutlined  
                        style={{fontSize:'2.5vw',  color:'#1FAFA8'}} /></td>
                        <td><AudioOutlined 
                        style={{fontSize:'2.5vw',  color:'#1FAFA8', marginLeft:'2vw'}} /></td>
                        </tr>
                    </table>
                </div>
                </div>
                <div>
                    <table style={{marginLeft:'auto', marginRight:'auto', marginTop:'2vw'}}>
                        <tr>
                            <td>
                                <button className="hRecordingBottomBtn">Send Request to Share</button>
                            </td>
                            <td>
                                <button className="hRecordingBottomBtn">Record</button>
                            </td>
                            <td>
                                <button className="hRecordingBottomBtn">Stop Preview</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ScreenRecordingHome;