import React from 'react';
import '../Admin/Table.css';

const Table = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Bill No</th>
                <th>Date</th>
                <th>Name</th>
                <th>Amount</th>
            </tr>
            {data.map((item,index) =>(
                <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.date}</td>
                    <td>{item.name}</td>
                    <td>{item.sprice}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
};

export default Table;