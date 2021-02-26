import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Nayok></Nayok>
      <Nayok></Nayok>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Nayok(){
  const nayokStyle = {
    color : 'red'
  }
  return (
    <div style = {{border: '1px solid red', margin:"10px"}}>
      <h1 style={nayokStyle}>Ami Nayok</h1>
      <h3>I have done 5 movies</h3>
    </div>
  )
}

export default App;
