import React, { useState } from "react";
import "./addNewFriend.css";

const AddNewFriend = ({ frndBtn, friendDetails }) => {
  let [name, setname] = useState("");
  let [imageURL, setimageURL] = useState("https://i.pravatar.cc/48");

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) return;

    let newFriend = {
      id: Date.now(),
      name: name,
      image: imageURL,
      balance: 0,
    };
    friendDetails(newFriend);

    setname("");
  }
  function handleInputVal(event) {
    setname(event.target.value);
  }
  function handleimageURL(event) {
    setimageURL(event.target.value);
  }
  return (
    <form
      style={frndBtn ? { display: "block" } : { display: "none" }}
      className="addnewfrnd"
      onSubmit={handleFormSubmit}
    >
      <div className="name-input">
        <label htmlFor="">
          <b>👫 Friend Name</b>
        </label>
        <input
          type="text"
          name="textname"
          value={name}
          onChange={handleInputVal}
          placeholder="Enter Your Friend Name"
        />
      </div>
      <div className="avatar-input">
        <label htmlFor="">
          <b>🌄 Image URL</b>
        </label>
        <input
          type="url"
          name="urlavatar"
          value={imageURL}
          onChange={handleimageURL}
        />
      </div>

      <div className="btn-add">
        <button>Add</button>
      </div>
    </form>
  );
};

export default AddNewFriend;
