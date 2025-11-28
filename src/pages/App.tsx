import { useState } from "react";
import "./App.css";

// Header
import Header from "../components/header/Header";

// Presentation
import Presentation from "../components/presentation/Presentation";

// Graphs container
import Shooting from "../components/components_graphs/Shooting.tsx";
import Year from "../components/components_graphs/Year.tsx";
import Type from "../components/components_graphs/Type.tsx";
import Director from "../components/components_graphs/Director.tsx";
import Borough from "../components/components_graphs/Borough";

// Footer
import Info from "../components/components_footer/Info";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Presentation />
      <div id="graph_container">
        {" "}
        <Shooting />
        <Year />
        <Type />
        <Director />
        <Borough />{" "}
      </div>
      <Info />
    </>
  );
}

export default App;
