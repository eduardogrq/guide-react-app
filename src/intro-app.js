import logo from './logo.svg';
import './App.css';

const pad = () => ({
  padding: '15px 20px'
})

const estilo1 = ({bg, color}) => ({
  backgroundColor: bg,
  color: color
})

const estilo2 = () => ({
  backgroundColor: 'black'
})

const Li = ({children, valor}) => {
  return (
    <li style={{ ...estilo1({bg: 'red', color: 'white'}), ...pad() }}>{children} {valor}</li>
  )
}

const App = () => {
  return (
    <ul style={{...estilo2(), ...pad()}}>
      <Li  valor="Feliz"> Hola mundo  </Li>
    </ul>
  );
}

export default App;
