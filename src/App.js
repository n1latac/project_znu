import Home from "./pages/Home/Home";
import LoginPage from './pages/LoginPage/Login';
import SignupPage from './pages/SignupPage/Signup';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Signup" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
