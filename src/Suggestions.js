import React, { useState } from "react";
import "./Suggestions.css";
import data from "./data.json";
import { Link } from "react-router-dom";

function Suggestions({ setPerson }) {
  const [suggestions, setSuggestions] = useState([]);
  const onTextChange = (e) => {
    const value = e.target.value;
    let suggest = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggest = data.sort().filter((v) => regex.test(v.firstName));
    }
    setSuggestions([...suggest]);
  };

  const renderSuggestions = () => {
    const newSuggestions = [...suggestions];
    return (
      <ul>
        {newSuggestions.map((item) => (
          <Link key={item.surname} onClick={() => setPerson(item)} to={`/${item.firstName}${item.surname}`}>
            {item.firstName} {item.surname}
          </Link>
        ))}
      </ul>
    );
  };

  return (
    <div className="Suggestions">
      <div className="Suggestions__container">
        <input placeholder="Find Person..." onChange={onTextChange} type="text" />
        {renderSuggestions()}
      </div>
    </div>
  );
}

export default Suggestions;
