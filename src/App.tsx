import { useState } from "react";
import Shooting from "./components/Shooting.tsx";
import Type from "./components/Type.tsx";
import Year from "./components/Year.tsx";
import Borough from "./components/Borough.tsx";
import Director from "./components/Director.tsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> dataviz</h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,
        aliquid sint iure quam dolore quisquam culpa eligendi ullam aut
        repellendus fuga, quasi hic quibusdam debitis error sequi praesentium
        reiciendis doloribus eum omnis consequuntur, dicta vitae sapiente?
        Debitis, tempora obcaecati! Et odio consequatur beatae minima vel
        doloremque quidem. Provident obcaecati ut temporibus quam? Consequuntur,
        voluptas nulla explicabo autem officia quibusdam hic, perferendis quasi
        error accusantium natus, molestias neque facilis fugiat labore. Expedita
        dolor error non obcaecati nobis facere at ipsum quidem cumque omnis
        doloremque perferendis aliquam deserunt harum, voluptates quod debitis
        accusamus minima sapiente optio quis. Ad quaerat odio maiores placeat?
        Iste, libero reiciendis corrupti nemo eveniet voluptatibus repellendus
        nostrum temporibus sunt a similique quo maxime tempora quisquam beatae,
        molestiae qui accusamus? Ducimus consectetur obcaecati placeat illo
        perspiciatis architecto consequatur minima ipsum harum voluptatibus esse
        quibusdam modi a quis quos dolorum voluptatem magnam libero, dolorem
        inventore sunt veritatis. Cupiditate, laudantium nemo!
      </p>

      <div id="graph_container">
        {" "}
        <Shooting /> 
        <Year /> 
        <Type /> 
        <Borough /> 
        <Director />
        {" "}
      </div>
    </>
  );
}

export default App;
