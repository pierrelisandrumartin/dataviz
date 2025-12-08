import ExitButton from "../components/components_exitGraphPage/ExitButton";
import Navbar from "../components/header/Navbar";
import Firstgraph from "../components/components_graph/Firstgraph";

export default function ShootingGraphPage() {
  return (
    <>
      <Navbar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error vero
        libero perferendis voluptas blanditiis tempora, debitis beatae explicabo
        voluptates! Eos, molestias nisi. Error, delectus. Illum iusto incidunt
        explicabo consequatur libero nesciunt. Harum eos ratione sequi
        voluptates, architecto voluptas voluptatibus! Architecto, illum, vitae
        <p className="border flex justify-center text-green-300">
          ----- S h o o t i n g G r a p h P a g e -----
        </p>
        Nostrum sit ab iure fuga distinctio eaque mollitia aut voluptatibus
        officia temporibus, saepe quae illum quidem numquam deserunt. Est
        pariatur libero maxime, nisi iusto excepturi officia alias aut magnam
        corrupti laborum illum iste, esse hic reprehenderit, optio eligendi quis
        placeat! Dolor temporibus quos sequi error fugiat facere.
      </p>
      <div className="m-auto">
        <Firstgraph />
      </div>
      <ExitButton />
    </>
  );
}
