import { useState } from "react";
import "./App.css";
import AddfriendBTN from "./Components/addFriendBTn/addfriendBTN";
import FriendLists from "./Components/friendLists/friendLists";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  let [friends, setFriend] = useState(initialFriends);
  let [SplitBill, setSplitBill] = useState();

  function friendDetails(obj) {
    setFriend((items) => [...items, obj]);
  }

  function handleSelect(values) {
    setSplitBill((items) => (items?.id === values.id ? "" : values));
  }

  return (
    <div className="App">
      <div className="friend">
        {friends.map((values, index) => (
          <FriendLists
            key={index}
            values={values}
            handleSelect={handleSelect}
            SplitBill={SplitBill}
            friends={friends}
            setFriend={setFriend}
          />
        ))}
      </div>
      <AddfriendBTN friendDetails={friendDetails} />
    </div>
  );
}

export default App;
