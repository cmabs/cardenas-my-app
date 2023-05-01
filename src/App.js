import logo from './logo.svg';
import NavBar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<Registration />}/>
      </Routes>
    </>
  );
}

export default App;