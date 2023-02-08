import "./App.css";
import Header from "./Components/header";
import Home from "./Components/home";
import Create from "./Components/create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Router>
      <Header handleSearchInput={handleSearchInput} searchInput={searchInput} />
      <Routes>
        <Route exact path="/" element={<Home searchInput={searchInput} />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
