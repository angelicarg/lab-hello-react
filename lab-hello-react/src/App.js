import './App.css';
import Card from './components/Card';

function App() {
  const divisoes = [
    {
      imagem: './src/images/icon1.png',
      titulo: 'Declarative',
      texto: 'React makes it paintess to create interactive UIs.',
    },
    {
      imagem: './src/images/icon2.png',
      titulo: 'Components',
      texto: 'Buind encapsulated components that manage their state.',
    },
    {
      imagem: './src/images/icon3.png',
      titulo: 'Single-Way',
      texto: 'A set of immutable values are passed to the components.',
    },
    {
      imagem: './src/images/icon4.png',
      titulo: 'JSX',
      texto: 'Statically-typed, desingned to run on modern browsers.',
    },
  ];
  function clickButton() {
    //console.log('Esse botão foi clicado!!');
  }
  return (
    <div>
      <div>
        <h1>Say Hello to ReactJS</h1>
        <h2>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </h2>
        <button onClick={clickButton} className="button">
          Awesome!
        </button>
      </div>
      <div className="separação">
        {divisoes.map(element => {
          return (
            <Card
              images={element.images}
              titulo={element.titulo}
              texto={element.texto}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
