import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Doctors from "./Components/Doctors/Doctors";
import Insurance from "./Components/Insurance/Insurance";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration : 2600
});
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Banner></Banner>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/insurance">
            <Insurance></Insurance>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>

      <div className="container-fluid  footer-section">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
