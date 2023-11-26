import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./screens/NavBar/NavBar";
import Home from "./screens/Home/Home";
import Footer from "./screens/Footer/Footer";
import Loading from "./components/Generic/Loading";
import { useEffect, useState } from "react";
let loadingListOptions = {
  "/": ["Hello", "வணக்கம்", "Hola", "你好", "привет", "olá", "नमस्ते"],
  "/work": ["Work"],
  "/about": ["About"],
  "/contact": ["Contact"],
  "/resume": ["Resume"],
};
function App() {
  const [isMounted, setIsMounted] = useState(false);
  const { pathname } = useLocation();

  useEffect(
    (e) => {
      let intervalID;
      const intervalDuration =
        loadingListOptions[pathname].length > 5
          ? 3
          : loadingListOptions[pathname].length;
      console.log(pathname, loadingListOptions[pathname].length);
      if (!isMounted) {
        setIsMounted(true);
        intervalID = setTimeout(() => {
          setIsMounted(false);
        }, intervalDuration * 1000);
      } else {
        intervalID = setTimeout(() => {
          setIsMounted(false);
        }, intervalDuration * 1000);
      }

      return () => {
        clearTimeout(intervalID);
      };
    },
    [pathname]
  );

  return (
    <div>
      <Loading
        loadingList={loadingListOptions[pathname]}
        isMounted={isMounted}
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
