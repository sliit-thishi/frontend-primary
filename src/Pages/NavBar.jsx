import React from "react";
import './NavBar.css';
import {
    ContainerOutlined,
   
  } from '@ant-design/icons';

function NavBar()
{
    return(
        <>
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
        </>
    );
}


export default NavBar;