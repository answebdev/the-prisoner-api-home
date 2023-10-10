import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Error from "./components/pages/Error";


const App = () => {
  return (
    <Router>
      {/* <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <div> Foooter </div> */}
    </Router>
  );
};

export default App;