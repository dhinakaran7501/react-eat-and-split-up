import React, { useState } from "react";
import "./moneySplitUp.css";

const MoneySplitUp = ({ selectedValues, selectedNames, onSplitbill }) => {
  let [billVal, setBillVal] = useState("");
  let [yourExpense, setYourExpense] = useState("");
  let [users, setUsers] = useState("dheena");

  const paidByFriend = billVal ? billVal - yourExpense : "";

  function handleSubmit(event) {
    event.preventDefault();

    if (!billVal || !yourExpense) return;

    onSplitbill(users === "dheena" ? paidByFriend : -yourExpense);
    setBillVal(0);
    setYourExpense(0);
  }
  function handleBillValue(event) {
    setBillVal(event.target.value);
  }
  function handleYourExpense(event) {
    setYourExpense(event.target.value);
  }
  function handleUsers(event) {
    setUsers(event.target.value);
  }

  return (
    <form
      className="moneySplitUp"
      style={selectedValues ? { display: "block" } : { display: "none" }}
      onSubmit={handleSubmit}
    >
      <div className="heading">
        <h2>SPLIT A BILL WITH {selectedNames}</h2>
      </div>
      <div className="input">
        <label>💰 Bill value</label>
        <input type="text" value={billVal} onChange={handleBillValue} />
      </div>
      <div className="input">
        <label>👫 Your expense</label>
        <input type="text" value={yourExpense} onChange={handleYourExpense} />
      </div>
      <div className="input">
        <label>👫 {selectedNames}'s expense</label>
        <input type="text" value={paidByFriend} disabled />
      </div>
      <div className="input">
        <label>🤑 Who is paying the bill</label>
        <select className="input" value={users} onChange={handleUsers}>
          <option value="dheena">Dheena</option>
          <option value="name">{selectedNames}</option>
        </select>
      </div>
      <div className="addbtn">
        <button>Split Bill</button>
      </div>
    </form>
  );
};

export default MoneySplitUp;
