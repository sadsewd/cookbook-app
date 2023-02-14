import "./App.css";
import Header from "./Components/header";
import Create from "./Components/create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./HomePage";
import DetailsPage from "./detailsPage";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Router>
      <Header handleSearchInput={handleSearchInput} searchInput={searchInput} />
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage searchInput={searchInput} />}
        />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
