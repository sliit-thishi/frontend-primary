import React, {useState} from "react";
import './Home.css';
import { AudioOutlined,VideoCameraOutlined  } from '@ant-design/icons';
import ScreenRecordingHome from "./ScreenRecordingHome";
import user from '../Resources/user.png';
import html2canvas from "html2canvas";
import workTrackerApi from "../api/workTrackerApi";

function MonitorEmployees()
{
    const [logicRecording, setLogicRecording] = useState(true);
    const [logicScreenshot, setLogicScreenshot] = useState(false);
    const [logicRecordingClr, setLogicRecordingClr] = useState('#1FAFA8');
    const [logicScreenshotClr, setLogicScreenshotClr] = useState('#8DDECB');
    const [logicRespond, setLogicRespond] = useState(false);
    const [sendEmpId , setSendEmpId] = useState(1)
    const [recievEmpId , setRecievEmpId] = useState(3)
    const [reqId , setReqId] = useState(0)
    const [screenshotLogic , setScreenshotLogic] = useState(false)


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


    const captureImage = () =>{
        html2canvas(document.body).then(function(canvas){
          var a = document.createElement('a')
          a.href = canvas.toDataURL("..assets/image/jpeg").replace("image/jpeg","image/octat-stream");
          a.download = 'screenshot.jpg';
          a.click();
        })
      }

      function getScreenshot(){
        if(!screenshotLogic){
            alert("You cant get screenshot request has not accepted")
        }
        else{
            captureImage()
        }
      }

    function onClickSendRequest() {
        if (!logicRespond) {
            workTrackerApi.post("/addRequest",{
                receiver_id:recievEmpId,
                sender_id:sendEmpId
            })
            .then((res) => { 
                console.log("result - ",res.data)
                setReqId(res.data)
                alert(res.data)
                setLogicRespond(true)
            })
      
          .catch((err) => { 
            console.log(err)
          });
    
        } else {
            setLogicRespond(false)
        }
    }



    function onclickShowResponse(){
        if (logicRespond) {
            
            workTrackerApi.get("/getResponse/"+reqId,{

            })
            .then((res) => { 
                console.log("result - ",res.data)
                alert(res.data)
                if(res.data!="pending"){
                    if(res.data=="accept"){
                        setScreenshotLogic(true)
                    }
                    setLogicRespond(false)
                }
                
                
            })
      
          .catch((err) => { 
            console.log(err)
          });
    
    
        } else {
            setLogicRespond(true)
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
                            onClick={getScreenshot} style={{backgroundColor:logicScreenshotClr}}>
                                Screenshot
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
            {logicRecording &&   
            <div>
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
                            {!logicRespond &&   <button className="hRecordingBottomBtn" onClick={onClickSendRequest}>Request to get Screenshot</button>}
                            </td>
                            <td>
                            {logicRespond &&   <button className="hRecordingBottomBtn" onClick={onclickShowResponse}>Respond</button>}
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
            </div>}
           
              
            </div>
        </div>
        </>
    );
}

export default MonitorEmployees;