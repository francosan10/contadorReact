const TituloSecundario = (props) => {
  return (
  <>
    <h2>Titulo generado con props de la comision: {props.comision}</h2>
    <p>Anio actual: {props.anioActual}</p>
  </>
  );
};

export default TituloSecundario;
