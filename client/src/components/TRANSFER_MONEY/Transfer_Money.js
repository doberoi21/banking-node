import React, { useState } from "react";
import "./Transfer.css";
import transfer from "./transfer.png";
import axios from "axios";

const Transfer_Money = () => {
  const onTransfer = async () => {
    try {
      const response = await axios.post(
        "https://bank-tsf.herokuapp.com/api/v1/transfer",
        {
          fromId: document.getElementById("sender_id").value,
          fromAccount: document.getElementById("sender_acc").value,
          toId: document.getElementById("reciever_id").value,
          toAccount: document.getElementById("reciever_acc").value,
          amount: document.getElementById("amt").value,
        }
      );
      alert("Transaction Successful");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <div>
        <h2 className="head">TRANSFER YOUR MONEY TO YOUR LOVED ONES!!!</h2>
      </div>
      <div className="main-container">
        <div>
          <h2 className="sub-head">FROM</h2>
          <form>
            <label>USER ID</label>
            <br />
            <input
              className="input-down"
              placeholder="USER_ID"
              id="sender_id"
            />
            <br />
            <label>A/C No.</label>
            <br />
            <input
              placeholder="A/C no."
              className="input-down"
              id="sender_acc"
            />
            <br />
            <label>AMOUNT (IN RUPEES)</label>
            <br />
            <input placeholder="Amount" id="amt" />
          </form>
        </div>
        <div className="vl">
          <img src={transfer} />
        </div>
        <div>
          <h2 className="sub-head">TO</h2>
          <form>
            <label>USER ID</label>
            <input
              placeholder="USER_ID"
              className="input-down"
              id="reciever_id"
            />
            <br />
            <label>A/C No.</label>
            <input placeholder="A/C no." id="reciever_acc" />
            <br />
          </form>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <button className="transfer-btn" onClick={onTransfer}>
          TRANSFER
        </button>
      </div>
    </div>
  );
};
export default Transfer_Money;
