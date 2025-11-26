import { useState } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Info from "./components/components_footer/Info"
// import Shooting from "./components/components_graphs/Shooting.tsx";
// import Type from "./components/components_graphs/Type.tsx";
// import Year from "./components/components_graphs/Year.tsx";
// import Borough from "./components/components_graphs/Borough.tsx";
// import Director from "./components/components_graphs/Director.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-800"> TITRE</h1>

      <div id="graph_container" >
        {" "}
        {/* <Shooting />
        <Year />
        <Type />
        <Borough />
        <Director /> */}
        <Navbar />
        <Info/>
        {" "}
      </div>
    </>
  );
}

export default App;
