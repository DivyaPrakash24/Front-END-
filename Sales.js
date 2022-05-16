import { useEffect , useState } from "react";
import '../Admin/pro.css';
import Table from "./Table";
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
function AddSales() {
    const [record, setRecord] = useState([]);
    const [date, setSdate] = useState("");
    const [name, setSName] = useState("");
    const [sprice, setSPrice] = useState("");
    const [query , setQuery] = useState("");
    

    const keys = ["date","name","sprice"]



    //console.log(record[0])
    const search = (data) =>{
        return data.filter(
        (name) =>
            name.name.toLowerCase().includes(query) || 
            name.date.toLowerCase().includes(query) ||
            name.name.toUpperCase(2).includes(query)
        
       );     
    }
    
    //console.log(query)
    //console.log(record.name.filter(name =>name.toLowerCase().includes("on")));
    //const [sqty, setSQty] = useState("");
    //const [qty, setSqty] = useState("");
    async function post_register_user() {
        var data = JSON.stringify({ "date":date ,"name" : name ,"sprice": sprice });
        const response = await fetch(
            'http://localhost:5000/sales', {
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
            loadSalesdetail();
            setSName("");
            setSdate("");
            setSPrice("");
        })
    }
    const loadSalesdetail = async () => 
    {
        var response = fetch('http://localhost:5000/view').then(function(response) {
            // console.log(response);
            return response.json();
        })
        .then (function(myJson) {
            // console.log(myJson);
            setRecord(myJson);
        });
    }
    useEffect(() => {
        loadSalesdetail();
    },[]);
    return (
        <>
        <Sidebar/>
        <CenterDiv>
        <div>
            <div>
            <h2 className="h1">Add Sales Details</h2>
            
            <form action="">
                <hr />
                <label htmlFor="date" className="label"><b>Date:</b></label>
                <input type="date" placeholder="date" value={date} onChange={(e) => setSdate(e.target.value)} />
                <hr />
                <label htmlFor="name" className="label"><b>Customer Name: </b></label>
                <input type="text" placeholder="name" value={name} onChange={(e) => setSName(e.target.value)} />
                <hr />
                <label htmlFor="sprice" className="label"><b>Amount :</b></label>
                <input type="number" placeholder="sprice" value={sprice} onChange={(e) => setSPrice(e.target.value)} />
                <hr />
                <CenterDiv>
                <button type="submit" className="registerbtn" onClick={handleOnSubmit}>Submit</button>
                </CenterDiv>
            </form>
            <center>
            <table className="table">
                <thead className="thead">
                    <tr>
                    <th>BillNo</th>
                        <th>Date</th>
                        <th> Name</th>
                        <th>Amount </th>
                    </tr>
                </thead>
                <tbody>
                    {
                    record.map((name,index) =>
                        <tr key={name._id} className="tr">
                            <td>{index + 1}</td>
                            <td>{name.date}</td>
                            <td>{name.name}</td>
                            <td>{name.sprice}</td>

                        </tr>
                    )
                    }
                </tbody>
            </table>
            <h3>---------</h3>
            <form>
            <input type="text" placeholder="serach..." className="Search"  onChange={(e)=> setQuery(e.target.value)} data={search(record)}/>
                {/* <ul className="list">
                    {record.filter(name=>name.name.toLowerCase().includes(query)).map((name) => (
                        <li key={name._id}  className="listItem">{name.name}</li>
                        
                    ))}
                </ul> */}
            </form>
            
            <Table data={search(record)} />
            </center>
        </div>
        </div>
        </CenterDiv>
        </>
    );
    
}

export default AddSales;