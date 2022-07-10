import LandingPage from "./components/1.landingPage";
import Sidebar from ".//components/2.SideBar/index";
import About from "./components/about";
import { Route } from "react-router-dom";
import Works from "./components/4.works";

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={Sidebar} />
      <Route path={"/"} exact component={LandingPage} />
      <Route path={"/about"} component={About} />
      <Route path={"/works/:type"} component={Works} />
    </div>
  );
}

export default App;
