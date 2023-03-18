import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import './App.css';
import Home from "./Components/Home";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Contact from "./Components/Contact";

function App() {
  return (
<>
<Router>
<Navbar />
<Routes>
<Route exact path="/" element={<Home />}/>
<Route exact path="/register" element={<Register />}/>
<Route exact path="/login" element={<Login />}/>
<Route exact path="/contact" element={<Contact />}/>

</Routes>
</Router>
</>
  );
}

export default App;
