import React, {useState} from "react";
import './Home.css';

import ScreenRecording from "./ScreenRecording";

function MonitorEmployees()
{
    const [logicRecording, setLogicRecording] = useState(true);
    const [logicScreenshot, setLogicScreenshot] = useState(false);
    const [logicRecordingClr, setLogicRecordingClr] = useState('#1FAFA8');
    const [logicScreenshotClr, setLogicScreenshotClr] = useState('#8DDECB');

    function onclickRecording() {
        if (!logicRecording) {
            setLogicRecording(true)
            setLogicRecordingClr('#1FAFA8')
            setLogicScreenshotClr('#8DDECB')
            setLogicScreenshot(false)
  
        } else {
            setLogicRecording(true)
            setLogicRecordingClr('#8DDECB')
        }
    }

    function onclickScreenshot() {
        if (!logicScreenshot) {
            setLogicRecording(false)
            setLogicRecordingClr('#8DDECB')
            setLogicScreenshotClr('#1FAFA8')
            setLogicScreenshot(true)
  
        } else {
            setLogicScreenshot(true)
            setLogicScreenshotClr('#8DDECB')
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
                            onClick={onclickRecording} style={{backgroundColor:logicRecordingClr}}>
                                Screen Recording
                            </button>
                        </td>
                        <td>
                            <button className="hRecordingBtn"
                            onClick={onclickScreenshot} style={{backgroundColor:logicScreenshotClr}}>
                                Screenshot
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        </>
    );
}

export default MonitorEmployees;