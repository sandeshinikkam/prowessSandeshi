import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Form } from 'react-router-dom';
import HeaderPage from './Components/Pages/header/HeaderPage';
import LoginPage from './Components/Pages/loginpage/LoginPage';
import RegistrationPage from './Components/Pages/registration/RegistrationPage';
import Header from './Components/Header'
import Login from './Components/Login';
import Registration from './Components/Registration';
import Challengepage from './Components/Pages/challengepage/Challengepage';

function App() {
  return (
    <div className="App">
     {/* <Header></Header>
     <Login></Login>
     <Registration></Registration>
     <Challengepage><Challengepage> */}
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeaderPage></HeaderPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegistrationPage></RegistrationPage>}></Route>
      <Route path="/challenge" element={<Challengepage></Challengepage>}></Route>
    </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;
