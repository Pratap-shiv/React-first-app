import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode="light"/>
        <Routes>
          <Route exact path="/about" element={<About mode ="light"/>}>
          </Route>
          <Route exact path="/" element={<Home/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
