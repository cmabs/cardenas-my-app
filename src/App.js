import logo from './logo.svg';
import NavBar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import LoginForm from './Pages/LoginForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (  
    <>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/loginform" element={<LoginForm />}/>
      </Routes>
    </>
  );
}

export default App;