import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";
import Bio from "./Components/Bio/Bio";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from './ScrollToTop'
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import BlogDetails from "./Components/Blog/BlogDetails"

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
            <Route path="/contact"  Component={Contact}/>
            <Route path="/blog"  Component={Blog}/>
            <Route path="/blog/:id"  Component={BlogDetails}/>
          </Routes>
        <Footer />
        {/* <div style={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'black', color:'white'}}>
          NOT AVAILABLE
        </div> */}
      </ScrollToTop>
    </BrowserRouter>
    </>
  );
}

export default App;
