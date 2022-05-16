import { useEffect, useState } from "react";
import Sidebar from "../Admin/Sidebar";
import '../Admin/pro.css';
import styled from "styled-components";

const Absolute = styled.div`
    postion:absolute;
`;
const CenterDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

function AddQuestion() {
  const [record, setRecord] = useState([]);
  const loadQuestiondetail = async () => 
  {
      var response = fetch('http://localhost:5000/faq').then(function(response) {
          // console.log(response);
          return response.json();
      })
      .then (function(myJson) {
          // console.log(myJson);
          setRecord(myJson);
      });
  }
  useEffect(() => {
      loadQuestiondetail();
  },[]);
  return (
        <>
            <Sidebar />
            <CenterDiv>
            <div>
            <div>
    
          <h2 className="h1">Customer Enquires</h2>
          <br />
          <table className="table">
              <thead className="thead">
                  <tr>
                  <th>SNo</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Message</th>
                  </tr>
              </thead>
              <tbody>
                  {
                  record.map((name,index) =>
                      <tr key={name._id} className="tr">
                          <td>{index + 1}</td>
                          <td>{name.name}</td>
                          <td>{name.email}</td>
                          <td>{name.message}</td>
                      </tr>
                  )
                  }
              </tbody>
          </table>
          <br />
          <br />
          <br />
          <h1>---------</h1>
        </div>
      </div>
      </CenterDiv>
      </>
  );
  
}

export default AddQuestion;