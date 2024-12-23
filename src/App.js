import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";
import Bio from "./Components/Bio/Bio";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <>
    <BrowserRouter>
      <ScrollToTop>
        <Header />
          <Routes>
            <Route path="/"  Component={Home}/>
            <Route path="/gallery"  Component={Gallery}/>
            <Route path="/bio"  Component={Bio}/>
          </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
    </>
  );
}

export default App;
