import React from "react";
//import Navbar from './Navbar';
//import styled from "styled-components";
//import scrollreveal from "scrollreveal";
import Sidebar from '../Admin/Sidebar';
import '../Admin/pro.css';

export default function Dashboard() {
    // useEffect(() => {
    //     const sr = scrollreveal({
    //     origin: "bottom",
    //     distance: "80px",
    //     duration: 2000,
    //     reset: false,
    // });
    // sr.reveal(
    //     `   
    //         nav,
    //         .row__one,
    //         .row__two
    //     `,
    //     {
    //       opacity: 0,
    //       interval: 100,
    //     }
    //   );
    // }, []);
    return (
      <div className="wrapper" >
        <Sidebar />
        <h1>Hello </h1>
      </div>
    );
  }
 