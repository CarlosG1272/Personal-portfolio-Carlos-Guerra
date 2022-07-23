import LandingPage from "./components/1.landingPage";
import Sidebar from ".//components/2.SideBar/index";
import About from "./components/about";
import { Route, Routes, useLocation } from "react-router-dom";
import Works from "./components/4.works";
import ContactForm from "./components/3.ContactForm";

function App() {
  const location = useLocation()
  return (
    <div> 
      <Sidebar/>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<LandingPage/>} />
        <Route path={"/about"} element={<About/>} />
        <Route path={"/works/:type"} element={<Works/>} />
        <Route path={"/contact"} element={<ContactForm/>} />
    </Routes>
    </div>


  );
}

export default App;
