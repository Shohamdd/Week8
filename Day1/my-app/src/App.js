import logo from './logo.svg';
import 'tachyons'
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


//Ex1
const myelement = React.createElement("h1", {}, "I do not use JSX!");
ReactDOM.render(myelement, document.getElementById('root'));
//Ex2
const myelement1 = <h1>I Love JSX!</h1>;
const sum = 5 + 5;
const myelement2 = <h1>React is {sum} times better with JSX</h1>;
ReactDOM.render(myelement1, document.getElementById('root'));
ReactDOM.render(myelement2, document.getElementById('root'));
//Ex3
const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};
const name = ( <div>
                <h3>{user.first_name}</h3>
                <h3>{user.last_name}</h3>
              </div>
            );
ReactDOM.render(name, document.getElementById('root'));
//Ex4

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
