import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component{

  constructor(){
    super();

    //set the state
    this.state = {
      string: 'Ashvin Jaiswal'
     
    }
  }

 render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to react world - {this.state.string}
        </p>
        <button onClick={() => this.setState({string: 'lets start'})}>Change the text</button>
      </header>
    </div>
  );
 }
}
export default App;
