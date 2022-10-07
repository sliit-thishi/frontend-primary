import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import './NavBar.css';
import './Header.css';
import {
    ContainerOutlined,
   
  } from '@ant-design/icons';
import './Home.css';




  
  function Home() {

    const onSearch = (value) => console.log(value);

    return (
      <div className='hFullScreen'>
      
      {/* Navigation Bar */}
        <div className="nFullContent">
            <div style={{height:'1vw'}}></div>
            <div className="nContent">
            <div style={{height:'5vw'}}>LOGO</div>
                <ul className="nItemList">
                    <li><ContainerOutlined/>Dashboard</li>
                    <li><ContainerOutlined/>Assigned Employees</li>
                    <li><ContainerOutlined/>Meetings</li>
                    <li><ContainerOutlined/>Reports</li>
                    <li><ContainerOutlined/>Monitor Employees</li>
                    <li><ContainerOutlined/>Settings</li>
                </ul>
            </div>
        </div>
        {/* End of Nav Bar */}
    
    {/* Content */}
        <div>

          {/* Header Part */}
          <div className="heContent">
             <div style={{width:'50%',height:'100%', position:'absolute', backgroundColor:'white'}}>
                <h1>Title</h1>
             </div>
             <div style={{width:'30%',height:'100%', marginLeft:'50%', position:'absolute', backgroundColor:'green'}}>
               <input className='heSearch' placeholder="input search text" onSearch={onSearch}  /> Search
             </div>
             <div style={{width:'20%',height:'100%', marginLeft:'80%',position:'absolute', backgroundColor:'white'}}>
             <h3>bell icon      image</h3>
             </div>
        
          </div>
          {/* End of Header part */}

          {/* Sub content - Meetings */}
          <div className='hSubContent'>
            <div className='hLeftSubContent'>
              <div className='hMeetingOptions'>

              </div>
              <div className='hMeetingProgress'>

              </div>
            </div>
            <div className='hRightSubContent'>

            </div>

          </div>
          {/* End of Sub Content - Meetings*/}


        </div>
    {/* End of the Content */}
      </div>
    );
  };
  
  export default Home;