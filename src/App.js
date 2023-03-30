import Home from "./pages/Home/Home";
import LoginPage from './pages/LoginPage/Login';
import SignupPage from './pages/SignupPage/Signup';
import HtmlPage from "./pages/HtmlPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HtmlIntro from "./markup/HtmlIntro";
import WhatIsHtml from "./markup/WhatIsHtml";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Login" element={<LoginPage/>}/>
        <Route path="Signup" element={<SignupPage/>}/>
        <Route path="Course/*" element={<HtmlPage/>}>
          <Route index path="html/introduction" element={<HtmlIntro/>}/>
          <Route path="html/What_is_html" element={<WhatIsHtml/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
