import React from "react";
import "./SearchedPerson.css";
import data from "./data.json";
function SearchedPerson({ person }) {
  const friends = data.filter((item, i) => {
    return item.friends.includes(person.id);
  });

  console.log(friends);

  return (
    <div className="SearchedPerson">
      <div className="SearchedPerson__container">
        <div className="SearchedPerson__person">
          <img src={person.picture} alt="person pic" />
          <div className="SearchedPerson__personInfo">
            <p>
              <strong>Name</strong>: {person.firstName} {person.surname}
            </p>
            <p>
              <strong>Genger</strong>: {person.gender}
            </p>
            <p>
              <strong>ID</strong>: {person.id}
            </p>
            <p>
              <strong>Age</strong>: {person.age}
            </p>
          </div>
        </div>
        <div>
          <h4>Friends:</h4>
          {friends.map((item) => {
            return (
              <p key={item.id}>
                <strong>Name</strong>: {item.firstName} {item.surname}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchedPerson;
