import { useEffect, useState } from "react";
import '../Admin/pro.css';
import Sidebar from '../Admin/Sidebar';
import styled from "styled-components";
const Absolute = styled.div`
    postion:absolute;
`;
const CenterDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

function AddProduct() {
    const [record, setRecord] = useState([]);
    const [name, setPName] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    async function post_register_user() {
        var data = JSON.stringify({ "name" : name , "price": price , "qty": qty });
        const response = await fetch(
            'http://localhost:5000/add', {
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
            // if(result.result) alert(result.result);
            // else alert(result.error);
            loadProductdetail();
            setPName("");
            setPrice("");
            setQty("");
        })
    }
    const loadProductdetail = async () => 
    {
        var response = fetch('http://localhost:5000/product').then(function(response) {
            // console.log(response);
            return response.json();
        })
        .then (function(myJson) {
            // console.log(myJson);
            setRecord(myJson);
        });
    }
    useEffect(() => {
        loadProductdetail();
    },[]);
    return (
        <>
            <Sidebar />
            <CenterDiv>
            <div>
            <div>
            <h2 className="h1">Product Details</h2>
                <form action="">
                    <label htmlFor="name"><b>Product Name : </b></label>
                    <input type="text" placeholder="name" value={name} onChange={(e) => setPName(e.target.value)} />
                    <hr/>
                    <label htmlFor="price"><b>Price : </b></label>
                    <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <hr />
                    <label htmlFor="name"><b>Quantity : </b></label>
                    <input type="number" placeholder="qty" value={qty} onChange={(e) => setQty(e.target.value)} />
                    <hr />
                    <CenterDiv>
                    <button type="submit" className="registerbtn" onClick={handleOnSubmit}>Submit</button>
                    </CenterDiv>
                </form>
                <br />
                <center>
                <table className="table">
                    <thead className="thead">
                        <tr>
                        <th>SNo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        record.map((name,index) =>
                            <tr key={name._id} className="tr">
                                <td>{index + 1}</td>
                                <td>{name.name}</td>
                                <td>{name.price}</td>
                                <td>{name.qty}</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
                <h3>------------</h3>
                </center>
            </div>
        </div>
        </CenterDiv>
        </>

    );
    
}

export default AddProduct;