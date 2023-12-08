import "./friendLists.css";
import MoneySplitUp from "../moneySplitUp/moneySplitUp";

const FriendLists = ({
  values,
  handleSelect,
  SplitBill,
  friends,
  setFriend,
}) => {
  const selectedValues = SplitBill?.id === values.id ? true : false;
  const selectedNames = SplitBill?.id === values.id ? values.name : "";

  function onSplitbill(value) {
    setFriend(
      friends.map((friend) =>
        friend.name === selectedNames
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  return (
    <ul className="member-List">
      <div className="image-section">
        <img src={values.image} alt={values.name} />
      </div>
      <div className="name-money-section">
        <h3 className="name">{values.name}</h3>
        <p
          className={
            values.balance > 0
              ? "balance"
              : values.balance < 0
              ? "redbalance"
              : "nrmlNames"
          }
        >
          {values.balance > 0
            ? `You owe ${values.name} ${values.balance}€`
            : values.balance < 0
            ? `${values.name} owes You ${values.balance}€`
            : `You and ${values.name} are Even`}
        </p>
      </div>
      <div className="select-btn-section">
        <button onClick={() => handleSelect(values)}>
          {selectedValues ? "Close" : "Select"}
        </button>
      </div>

      {/* Money Splitup */}
      <MoneySplitUp
        selectedValues={selectedValues}
        selectedNames={selectedNames}
        onSplitbill={onSplitbill}
      />
    </ul>
  );
};

export default FriendLists;
