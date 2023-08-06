import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import Xboxes from "./components/Xbox/Xboxes";
import Playstation from "./components/Playstation/Playstation";
import Crypto from "./components/Crypto/Crypto";
import Authorization from "./components/Authorization/Authorization";
import Contacts from "./components/Contacts/Contacts";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Pc from "./components/PC/Pc";
import Drivers from "./components/Drivers/Drivers";
import Regiser from "./components/Authorization/Register";
import AddProduct from "./components/AddProduct/AddProduct";
import XboxListener from "./components/Xbox/XboxListener/XboxListener";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/xbox" element={<Xboxes/>} />
                <Route path="/playstation" element={<Playstation/>} />
                <Route path="/pc" element={<Pc/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/crypto" element={<Crypto/>} />
                <Route path="/authorization" element={<Authorization/>} />
                <Route path="/drivers" element={<Drivers/>} />
                <Route path="/register" element={<Regiser/>} />
                <Route path="/addproduct" element={<AddProduct/>} />
                <Route path="/xbox/:id" element={<XboxListener/>}/>

            </Routes>
            <Footer/>


        </Router>
    </div>
  );
}

export default App;
