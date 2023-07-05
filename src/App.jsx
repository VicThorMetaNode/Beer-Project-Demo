// import { useState } from "react";
import HeroBanner from "./components/HeroBanner";
import Join from "./components/Join";
import Shop from "./components/Shop";
import WebgiViewer from "./components/WebgiViewer";
function App() {
  // const [theme, setTheme] = useState("cupcake");

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "coffee" ? "cyberpunk" : "coffee"));
  // };
  return (
    <>
      {/* <div className={`theme-${theme}`}> */}
      {/* <button onClick={toggleTheme} className="btn btn-primary btn-sm mx-2">
          Toggle Theme
        </button> */}
      <HeroBanner />
      <Join />
      <Shop />
      <WebgiViewer />
      {/* </div> */}
    </>
  );
}

export default App;
