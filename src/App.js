import PrincipalPage from './conponents/accueil';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
// import des composants
import Footer from './conponents/outils/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <PrincipalPage />
      </div>
      <Routes>
        <Route path="/home" exact component={PrincipalPage} />
        <Route path="/home/home1" exact component={PrincipalPage} />
        <Route path="/home/home2" exact component={PrincipalPage} />
        <Route path="/home/home3" exact component={PrincipalPage} />
        <Route path="/about-us" exact component={PrincipalPage} />
        <Route path="/about-us/aim" exact component={PrincipalPage} />
        <Route path="/about-us/vision" exact component={PrincipalPage} />
        <Route path="/shop" exact component={Footer} />
        <Route path="/services" exact component={PrincipalPage} />
        <Route path="/services/services1" exact component={PrincipalPage} />
        <Route path="/services/services2" exact component={PrincipalPage} />
        <Route path="/services/services3" exact component={PrincipalPage} />
        <Route path="/contact" exact component={PrincipalPage} />
        <Route path="/events" exact component={PrincipalPage} />
        <Route path="/events/events1" exact component={PrincipalPage} />
        <Route path="/events/events2" exact component={PrincipalPage} />
        <Route path="/support" exact component={PrincipalPage} />
      </Routes>
    </Router>
    
  );
}

export default App;
