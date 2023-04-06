import Home from "./pages/Home/Home";
import LoginPage from './pages/LoginPage/Login';
import SignupPage from './pages/SignupPage/Signup';
import HtmlPage from "./pages/CoursePages/HtmlPage";
import CssPage from "./pages/CoursePages/CssPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HtmlIntro from "./markup/Html/HtmlIntro";
import WhatIsHtml from "./markup/Html/WhatIsHtml";
import CssIntro from "./markup/Css/CssIntro";
import CssFontsText from "./markup/Css/CssFontsText";
import CssBlocks from "./markup/Css/CssBlocks";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Login" element={<LoginPage/>}/>
        <Route path="Signup" element={<SignupPage/>}/>
        <Route path="Course/html/*" element={<HtmlPage/>}>
          <Route index path="introduction" element={<HtmlIntro/>}/>
          <Route path="What_is_html" element={<WhatIsHtml/>}/>
        
        </Route>
        <Route path="Course/css/*" element={<CssPage/>}>
          <Route index path="introduction" element={<CssIntro/>}/>
          <Route path="fonts_text" element={<CssFontsText/>}/>
          <Route path="blocks" element={<CssBlocks/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
