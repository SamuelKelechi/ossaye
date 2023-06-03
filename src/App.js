import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Bio from "./Components/Bio/Bio";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/"  Component={Home}/>
        <Route path="/bio"  Component={Bio}/>
      </Routes>
      <Header />
    </Router>
    </>
  );
}

export default App;
