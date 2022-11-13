import React, {useState , useEffect} from "react";
import './Home.css';
import { AudioOutlined,VideoCameraOutlined  } from '@ant-design/icons';
import ScreenRecordingHome from "./ScreenRecordingHome";
import user from '../Resources/user.png';
import html2canvas from "html2canvas";
import workTrackerApi from "../api/workTrackerApi";
import ScreenRecording from "./ScreenRecording";
import {useReactMediaRecorder} from "react-media-recorder";
import {Button} from "antd";
import shareApi from "../api/shareApi";
import image1 from "./1.png"
import image2 from "./2.png"
import image3 from "./3.png"
import image4 from "./4.png"


const MonitorEmployees = ({ screen=true,
                              audio=false,
                              video=false,
                              downloadRecordingPath,
                              downloadRecordingType,
                              emailToSupport}) =>
{
    const [logicRecording, setLogicRecording] = useState(true);
    const [logicScreenshot, setLogicScreenshot] = useState(false);
    const [LogicShare, setLogicShare] = useState(false);
    const [logicRecordingClr, setLogicRecordingClr] = useState('#1FAFA8');
    const [logicScreenshotClr, setLogicScreenshotClr] = useState('#8DDECB');
    const [logicRespond, setLogicRespond] = useState(false);
    const [sendEmpId , setSendEmpId] = useState(1)
    const [recievEmpId , setRecievEmpId] = useState(3)
    const [reqId , setReqId] = useState(0)
    const [screenshotLogic , setScreenshotLogic] = useState(false)

    const [recordingNumber, setRecordingNumber] = useState(0);

    const[imageUrl ,setImageUrl] = useState("")
    const[latestId , setLatestId] = useState(0)
    const[baseUrl , setBaseUrl] = useState("")
    const[buttoKey , setButtonKey] = useState("Share")
    const[imageUpload , setImageUpload] = useState(null)
    const[imgIndex , setImgIndex] = useState(0)
  
  
    const images = [image1 , image2 , image3 , image4]

    const {
        status,
        startRecording: startRecord,
        stopRecording: stopRecord,
        mediaBlobUrl
    } = useReactMediaRecorder({ screen, audio, video });

    const startRecording = () => {
        return startRecord();
    };

    const stopRecording = () => {
        const currentTimeSatmp = new Date().getTime();
        setRecordingNumber(currentTimeSatmp);
        return stopRecord();
    };
    const viewRecording = () => {
        window.open(mediaBlobUrl, "_blank").focus();
    };
    const downloadRecording = () => {
        const pathName = `${downloadRecordingPath}_${recordingNumber}.${downloadRecordingType}`;
        try {
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                // for IE
                window.navigator.msSaveOrOpenBlob(mediaBlobUrl, pathName);
            } else {
                // for Chrome
                const link = document.createElement("a");
                link.href = mediaBlobUrl;
                link.download = pathName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } catch (err) {
            console.error(err);
        }
    };
    const mailRecording = () => {
        try {
            window.location.href = `mailTo:${emailToSupport}?subject=Screen recording for an Issue number ${recordingNumber}&body=Hello%20Team,%0D%0A%0D%0A${mediaBlobUrl}`;
        } catch (err) {
            console.error(err);
        }
    };

    function ShareScreen(){

    }

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


    const captureImageD = () =>{
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
            captureImageD()
            setScreenshotLogic(false)
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
                alert("Request Id : "+res.data)
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
                alert("Response Of Request : "+res.data)
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



  if(localStorage.getItem("started")===null){
    localStorage.setItem("shareLogic","false")
    localStorage.setItem("started","false")
  }

  function ShareScreen(){
    localStorage.setItem("shareLogic","true")
  }



  function changeImage(){
    setImgIndex(imgIndex+1)
    if(imgIndex>=3){
      setImgIndex(0)
    }
  }

  function StopScreen(){

      localStorage.setItem("shareLogic","false")
      shareApi.get("/stopMeeting",{
    })
    .then((res) => { 
        console.log("result - ",res.data)
    })
  
  // Catch errors if any
  .catch((err) => { 
    console.log(err)
  });
  }


  const captureImage = () =>{
    html2canvas(document.body).then(function(canvas){
      var a = document.createElement('a')
      a.href = canvas.toDataURL("..assets/image/jpeg").replace("image/jpeg","image/octat-stream");
      setBaseUrl(canvas.toDataURL("..assets/image/jpeg").replace("image/jpeg","image/octat-stream"))

      shareApi.post("/setUrl",{
        url : a.href
    })
    .then((res) => { 
        console.log("result - ",res.data)
    })
  
  // Catch errors if any
  .catch((err) => { 
    console.log(err)
  });
    })
  }
  var timer
  useEffect(()=>{
    timer = setInterval(()=>{
    
                var logicS = localStorage.getItem("shareLogic")           
                if(logicS==="true"){
                   captureImage()
                }
  },500)
  return()=>clearTimeout(timer)
  },[])

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
                        <td>
                        <button className="hRecordingBtn"
                            onClick={ShareScreen} style={{backgroundColor:logicScreenshotClr}}>
                                ShareScreen
                            </button>
                        </td>

                        <td>
                        <button className="hRecordingBtn"
                            onClick={StopScreen} style={{backgroundColor:logicScreenshotClr}}>
                                StopShare
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
                        style={{fontSize:'2.5vw',  color:'#1FAFA8', float:'right'}} /></td>
                        <td><AudioOutlined 
                        style={{fontSize:'2.5vw',  color:'#1FAFA8', marginLeft:'2vw'}} /></td>
                        </tr>
                       
        <div >
        <button style={{ float:'right', marginTop:'2vw',  height:'2vw', width:'7vw', backgroundColor:'transparent', color:'#066B66', fontSize:'1.2vw', borderWidth:'0.3vw', borderColor:'#066B66'}} onClick={changeImage}>
          Move
        </button>
        <img src={images[imgIndex]} alt="Still No" style={{width:"20vw" , height:"20vw" ,  marginRight:'19vw'}}></img>
        </div>
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
                                {status && status !== "recording" && (
                                    <button
                                        onClick={startRecording}
                                        className="hRecordingBottomBtn"
                                    >
                                        {mediaBlobUrl ? "Record again" : "Start Recording"}
                                    </button>
                                )}

                            </td>
                            <td>
                                {status && status === "recording" && (
                                    <button
                                        onClick={stopRecording}
                                        className="hRecordingBottomBtn"
                                    >
                                        Stop Preview
                                    </button>
                                )}
                            </td>
                            <td>
                                {status && status !== "idle" && (
                                    <button
                                        onClick={viewRecording}
                                        className="hRecordingBottomBtn"
                                    >
                                        View
                                    </button>
                                )}

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