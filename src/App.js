import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Sakib Khan','Bappi'];
  return (
    <div className="App">

      <Nayok name="Jasim" age='60'></Nayok>
      <Nayok name="Manna"></Nayok>
      <Nayok name={nayoks[0]}></Nayok>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Nayok(props){
  const nayokStyle = {
    color : 'red'
  }
  return (
    <div style = {{border: '1px solid red', margin:"10px"}}>
      <h1 style={nayokStyle}>Ami {props.name}</h1>
      <h3>I have done 5 movies in {props.age || 30} years</h3>
    </div>
  )
}

export default App;
