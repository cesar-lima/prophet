import bolaDeCristal from './assets/bolaDeCristal.png'
import './styles/global.css'

function App() {
  return (
    <div id="container">
      <img src={bolaDeCristal} alt="Imagem de uma bola de cristal" />
      <h1>
        Vou revelar seu destino!
      </h1>
      <p>
        Clique em fazer pergunta para que seu destino seja revelado.
      </p>
      <input id="inputPergunta" type="text" placeholder="Digite sua pergunta" />
      <button id="buttonPerguntar">Fazer Pergunta</button>
      <h3 id="resposta">

      </h3>
    </div>
  )
}

export default App
