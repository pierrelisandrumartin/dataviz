import { useState } from "react";
import "./App.css";

// Header
import Header from "../components/header/Header.tsx";

// Presentation
import Presentation from "../components/presentation/Presentation.tsx";

// Graph Icons container
import ShootingIcon from "../components/components_graphs/ShootingIcon.tsx";
import YearIcon from "../components/components_graphs/YearIcon.tsx";
import TypeIcon from "../components/components_graphs/TypeIcon.tsx";
import DirectorIcon from "../components/components_graphs/DirectorIcon.tsx";
import BoroughIcon from "../components/components_graphs/BoroughIcon.tsx";

// Footer
import Info from "../components/components_footer/Info.tsx";

function Home() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Presentation />
      <div id="graph_container"  className="flex flex-wrap gap-y-[10px] justify-evenly">
        {" "}
        <ShootingIcon />
        <YearIcon/>
        <TypeIcon />
        <DirectorIcon />
        <BoroughIcon />{" "}
      </div>
      <Info />
    </>
  );
}

export default Home;
