import Home from "./pages/Home/Home";
import LoginPage from './pages/LoginPage/Login';
import SignupPage from './pages/SignupPage/Signup';
import HtmlPage from "./pages/CoursePages/HtmlPage";
import CssPage from "./pages/CoursePages/CssPage";
import JsPage from "./pages/CoursePages/JsPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HtmlIntro from "./markup/Html/HtmlIntro";
import WhatIsHtml from "./markup/Html/WhatIsHtml";
import CssIntro from "./markup/Css/CssIntro";
import CssFontsText from "./markup/Css/CssFontsText";
import CssBlocks from "./markup/Css/CssBlocks";
import CssConclusion from "./markup/Css/CssConclusion";
import JsIntro from "./markup/Js/JsIntro";
import WhatIsJs from "./markup/Js/WhatIsJs";
import WhatJsDoing from "./markup/Js/WhatJsDoing";
import WhatJsDoingOnPage from "./markup/Js/WhatJsDoingOnPage";
import AddingJs from "./markup/Js/AddingJs";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Login" element={<LoginPage/>}/>
        <Route path="Signup" element={<SignupPage/>}/>
        <Route path="Course/html/*" element={<HtmlPage/>}>
          <Route path="introduction" element={<HtmlIntro/>}/>
          <Route path="What_is_html" element={<WhatIsHtml/>}/>
        
        </Route>
        <Route path="Course/css/*" element={<CssPage/>}>
          <Route path="introduction" element={<CssIntro/>}/>
          <Route path="fonts_text" element={<CssFontsText/>}/>
          <Route path="blocks" element={<CssBlocks/>}/>
          <Route path="conclusion" element={<CssConclusion/>}/>
        </Route>
        <Route path="Course/js/*" element={<JsPage/>}>
          <Route path="introduction" element={<JsIntro/>}/>
          <Route path="what_is_js" element={<WhatIsJs/>}/>
          <Route path="what_js_doing" element={<WhatJsDoing/>}/>
          <Route path="what_js_doing_on_your_page" element={<WhatJsDoingOnPage/>}/>
          <Route path="adding_js_on_your_page" element={<AddingJs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
