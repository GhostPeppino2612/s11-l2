import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSearch from "./components/MainSearch";
import Favourites from "./components/Favourites";
import CompanySearchResults from "./components/CompanySearchResults";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
