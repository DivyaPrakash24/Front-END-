import { useEffect , useState } from "react";
import '../Admin/pro.css';
import Sidebar from "../Admin/Sidebar";
import styled from "styled-components";

const Absolute = styled.div`
    postion:absolute;
`;
const CenterDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;
function Login() {
    //const [record, setRecord] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function post_register_user() {
        var data = JSON.stringify({ "email" : email , "password": password});
        const response = await fetch(
            'http://localhost:5000/logins', {
            method: "POST",
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result;
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        post_register_user().then(result=>{
            //if(result.result) alert(result.result);
            //else alert(result.error);
            //loadCustomerdetail();
            setEmail("");
            setPassword("");
            //setCName("");
        })
    }
    // const loadCustomerdetail = async () => 
    // {
    //     var response = fetch('http://localhost:5000/customer').then(function(response) {
    //         // console.log(response);
    //         return response.json();
    //     })
    //     .then (function(myJson) {
    //         // console.log(myJson);
    //         setRecord(myJson);
    //     });
    // }
    // useEffect(() => {
    //     loadCustomerdetail();
    // },[]);
    return (
        <>
            <Sidebar />
            <CenterDiv>
                <div>
            
            <h2 className="h1">Admin Login</h2>
            <form action="">
                <label htmlFor="email"><b>Email: </b></label>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <hr />
                <label htmlFor="password"><b>Password: </b></label>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <hr />
                <CenterDiv>
                <button type="submit" className="registerbtn" onClick={handleOnSubmit}>Submit</button>
                </CenterDiv>
            </form>
            <br></br>
            <br></br>
            <br></br>
            
            <h3>---------</h3>
            </div>
		</CenterDiv>
        </>
);
    
}

export default Login;