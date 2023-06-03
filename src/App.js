import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Bio from "./Components/Bio/Bio";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/"  Component={Home}/>
        <Route path="/bio"  Component={Bio}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
