import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Modal = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://bank-tsf.herokuapp.com/api/v1/transactions"
        );
        setListData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const lists = (item, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item._id}</td>
        <td>{item.fromAcc}</td>
        <td>{item.toAcc}</td>
        <td>{item.amount}</td>
      </tr>
    );
  };

  return (
    <div>
      <h3>TRANSFER HISTORY</h3>
      <div>
        <Table
          striped
          bordered
          hover
          style={{
            border: "2px solid black",
            height: "586px",
            width: "100%",
            padding: "2%",
          }}
        >
          <thead>
            <tr style={{ background: "black", color: "white" }}>
              <th>S.No.</th>
              <th>Transaction Id</th>
              <th>Sender Account No</th>
              <th>Receiver Account No</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{listData.map(lists)}</tbody>
        </Table>
      </div>
    </div>
  );
};
export default Modal;
