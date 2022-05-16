import React from 'react';
import styled from 'styled-components';
import '../Admin/side.css';
import { SidebarData } from './SidebarData';

const Absolute = styled.div`position:absolute;`

export default function Sidebar() {
  return (
    <Absolute>
    <div className='Sidebar'>
      <br />
      <h1 className='h1'>Admin</h1>
      <br />
      <br />
        <ul className='SidebarList'>
      {SidebarData.map((val, key) => {
          return(
              <li key={key} 
              className="row"
              onClick={()=> {
                console.log(val.Link)
              window.location.pathname = val.Link}}>
                  <div>{val.title}</div>{" "}
              </li>
          )
      })}
      </ul>
    </div>
    </Absolute>
  );
}