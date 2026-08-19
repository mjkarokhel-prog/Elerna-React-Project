import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/Navbar/Nav";
import Home from "./Component/Home/Home";
import CTA from "./Component/CTA/CTA";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <Router>
      <Nav />
      <Home />
      <CTA />
      <Footer />
    </Router>
  );
}

export default App;
