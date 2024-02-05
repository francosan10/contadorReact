import "bootstrap/dist/css/bootstrap.min.css";
import TituloSecundario from "./components/TituloSecundario";
import Contador from "./components/Contador";
function App() {
  // aqui agregamos la logica del componente
  const anioActual = new Date();

  return (
    // aqui puedo agregar un poco mas de logica
    <section className="container my-4">
      <h1 className="text-center display-3">
        {/* aqui agrego todo el maquetado del componente */}
        Contador
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        laudantium nisi. Ea architecto rem sint recusandae inventore eum
        perferendis ut.
      </p>
      <TituloSecundario comision='c75i' anioActual={anioActual.getFullYear()}></TituloSecundario>
      {/* <TituloSecundario/> */}
      <Contador></Contador>
    </section>
  );
}

export default App;
