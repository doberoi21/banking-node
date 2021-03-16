import React, { useEffect, useState } from "react";
import { Userlists } from "./Userlists";
// import * as RB from 'react-bootstrap';
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/users");
        setListData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const lists = (user, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.accNo}</td>
        <td>{user.balance}</td>
      </tr>
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: "3%",
        }}
      >
        <div>
          <NavLink to="/transfer">
            <button className="btn" style={{ border: "2px solid black" }}>
              Transfer Money
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/history">
            <button className="btn" style={{ border: "2px solid black" }}>
              Transfer History
            </button>
          </NavLink>
        </div>
      </div>
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
              <th>S_Id</th>
              <th>User_Id</th>
              <th>USERNAME</th>
              <th>A/C No.</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>{listData.map(lists)}</tbody>
        </Table>
      </div>
    </div>
  );
};
export default User;

// <table>
// <tr>
//     <th>S_Id</th>
//     <th>User_Id</th>
//     <th>USERNAME</th>
//     <th>A/C No.</th>
// </tr>
// </table>
