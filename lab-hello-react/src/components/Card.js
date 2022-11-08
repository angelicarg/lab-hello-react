// fazer a função Card e exportar

function Card(props) {
  return (
    <div className="dividido">
      {props.imagem}
      <h4>{props.titulo}</h4>
      <p>{props.texto}</p>
    </div>
  );
}

export default Card;

//<div>
//<h1>Say Hello to ReactJS</h1>
// <h2>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h2>
//</div>
