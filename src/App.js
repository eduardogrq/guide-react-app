import { Component } from "react";

class App extends Component {
  state = {
    valor: 0,
  }
  render() {
    return (
      <div>
        
        <h1>{`Contador: ${this.state.valor}`}</h1>

        <button onClick={() => this.setState({valor: this.state.valor + 1})}>Aumentar en 1</button>
        <button onClick={() =>  this.setState({valor: this.state.valor - 1})  }>Disminuir en 1</button>

      </div>
    )
  }
}

export default App;