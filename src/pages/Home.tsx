import "./App.css";


// Header
import Header from "../components/header/Header.tsx";

// Presentation
import Presentation from "../components/presentation/Presentation.tsx";

// Graph Icons container
import GraphIconContainer from "../components/components_graphs/GraphIconContainer.tsx";

// Footer
import Info from "../components/components_footer/Info.tsx";

function Home () {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Presentation />
      <GraphIconContainer/>
      <Info />
    </>
  );
}


export default Home;
