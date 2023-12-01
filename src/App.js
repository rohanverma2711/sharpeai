import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Data from "./components/Data";
import Transaction from "./components/Transaction";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;