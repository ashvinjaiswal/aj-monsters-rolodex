import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component{

  constructor(){
    super();

    //set the state
    this.state = {
      string: 'Ashvin Jaiswal',
      monsters:[]
    }
  }

  //LifeCycle Called immediately after a component is mounted. 
  // Setting state here will trigger re-rendering.
  componentDidMount(){
    //fecth the data and render on the page
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({monsters:users}))
    
  }

 render(){
    return (
    <div className="App">
      {this.state.monsters.map((monster,index) =>
          <h1 key={monster.id}> {monster.name}</h1>
      )}      
    </div>
  );
 }
}
export default App;
