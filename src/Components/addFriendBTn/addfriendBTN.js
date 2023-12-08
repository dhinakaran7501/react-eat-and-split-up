import React, { useState } from "react";
import "./addfriendBTN.css";
import AddNewFriend from "../addNewFriend/addNewFriend";

const AddfriendBTN = ({ friendDetails }) => {
  let [frndBtn, setfrndBtn] = useState(false);

  function handleaddfriend() {
    setfrndBtn(frndBtn ? false : true);
  }

  return (
    <div className="add-friend-btn">
      {<AddNewFriend frndBtn={frndBtn} friendDetails={friendDetails} />}

      <button onClick={handleaddfriend}>
        {frndBtn ? "Close" : "Add Friend"}
      </button>
    </div>
  );
};

export default AddfriendBTN;
