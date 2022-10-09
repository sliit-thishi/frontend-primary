import React, {useState} from "react";
import workTrackerApiCopy from "../api/workTrackerApiCopy";

function Test(){

    function testMl(){
        workTrackerApiCopy.get("/home",{
          })
          .then((res) => { 
              console.log("result - ",res.data)
              alert(res.data)
          })
    
        .catch((err) => { 
          console.log(err)
        });
    }

    return(
        <>
        <p>Hello</p>
        <button onClick={testMl}>Click</button>
        </>
    )

}

export default Test