import Home from "./pages/Home/Home";
import LoginPage from './pages/LoginPage/Login';
import SignupPage from './pages/SignupPage/Signup';
import HtmlPage from "./pages/CoursePages/HtmlPage";
import CssPage from "./pages/CoursePages/CssPage";
import JsPage from "./pages/CoursePages/JsPage";
import { Routes,Route } from "react-router-dom";
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
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth, getMe } from "./redux/features/auth/authSlice";


function App() {
  const isAuth = useSelector(checkAuth)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getMe())
  },[])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Login" element={<LoginPage/>}/>
        <Route path="Signup" element={<SignupPage/>}/>
        {isAuth ? (
          <>
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
        </>
        ) : null}
        
      </Routes>
      <ToastContainer position='bottom-right'/>
      </>
  );
}

export default App;
