import Home from "./pages/Home/Home";
import LoginPage from './pages/LoginPage/Login';
import SignupPage from './pages/SignupPage/Signup';
import HtmlPage from "./pages/HtmlPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HtmlIntro from "./markup/HtmlIntro";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="Login" element={<LoginPage/>}/>
        <Route path="Signup" element={<SignupPage/>}/>
        <Route path="Course/*" element={<HtmlPage/>}>
          <Route path="html/introduction" element={<HtmlIntro/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
