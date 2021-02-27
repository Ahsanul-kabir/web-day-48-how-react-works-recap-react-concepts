import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const nayoks = ['Sakib Khan', 'Bappi'];
  const nayoks = [{ name: 'Sakib Khan', age: 50 }, { name: 'Bappi', age: 25 }];
  return (
    <div className="App">

      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} age={nk.age}></Nayok>)
      }

      {/* <Nayok name="Jasim" age='60'></Nayok>
      <Nayok name="Manna"></Nayok>
      <Nayok name={nayoks[0]}></Nayok> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      {/* <h3>Number of movies: {count}</h3> */}

      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>

    </div>
  )
}

function MovieDisplay(props) {
  return <h4>Movies I have Acted: {props.movies}</h4>
}

function Nayok(props) {
  const nayokStyle = {
    color: 'red'
  }
  return (
    <div style={{ border: '1px solid red', margin: "10px" }}>
      <h1 style={nayokStyle}>Ami {props.name}</h1>
      <h3>I have done 5 movies in {props.age || 30} years</h3>
    </div>
  )
}

export default App;
