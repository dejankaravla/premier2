import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Suggestions from "./Suggestions";
import SearchedPerson from "./SearchedPerson";

function App() {
  const [person, setPerson] = useState("");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Suggestions setPerson={setPerson} />} />
          <Route path={`/${person.firstName}${person.surname}`} element={<SearchedPerson person={person} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
