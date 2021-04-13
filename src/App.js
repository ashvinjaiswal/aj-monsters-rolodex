import './App.css';
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component{

  constructor(){
    super();

    //set the state
    this.state = {
      string: 'Ashvin Jaiswal',
      monsters:[],
      searchField:''
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

    const {monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
    <div className="App">
      <input type='search' placeholder='seach monsters' onChange={e => this.setState({ searchField: e.target.value})}/>
      <CardList monsters= {filterMonsters} />            
    </div>
  );
 }
}
export default App;
