import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component{

  constructor(){
    super();

    //set the state
    this.state = {
      string: 'Ashvin Jaiswal',
      monsters:[
        {
          id:"mon1", 
          name:"Frankstig"
        },
        {
          id:"mon2", 
          name:"Dracula"
        },
        {
          id:"mon3", 
          name:"Zombie"
        }
      ]
    }
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
