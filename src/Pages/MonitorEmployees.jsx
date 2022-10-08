import React, {useState} from "react";
import './Home.css';

import ScreenRecording from "./ScreenRecording";

function MonitorEmployees()
{
    const [logicRecording, setLogicRecording] = useState(true);
    const [logicScreenshot, setLogicScreenshot] = useState(false);

    function onclickRecording() {
        if (!logicRecording) {
            setLogicRecording(true)
            setLogicScreenshot(false)
  
        } else {
            setLogicRecording(true)
        }
    }

    function onclickScreenshot() {
        if (!logicScreenshot) {
            setLogicRecording(false)
            setLogicScreenshot(true)
  
        } else {
            setLogicScreenshot(true)
        }
    }

    return(
        <>
        <div>
            <div>
                <table>
                    <tr>
                        <td>
                            <button className="hRecordingBtn"
                            onClick={onclickRecording}>
                                Screen Recording
                            </button>
                        </td>
                        <td>
                            <button className="hRecordingBtn"
                            onClick={onclickScreenshot}>
                                Screenshot
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            {logicRecording &&  <div><ScreenRecording/></div>}
            {logicScreenshot &&  <div><ScreenRecording/></div>}
        </div>
        </>
    );
}

export default MonitorEmployees;