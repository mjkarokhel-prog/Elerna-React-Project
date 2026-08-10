import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/Navbar/Nav";
import Home from "./Component/Home/Home";
function App() {
  return (
    <Router>
      <Nav />
      <Home />
    </Router>
  );
}

export default App;
