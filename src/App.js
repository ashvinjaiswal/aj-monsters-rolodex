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
    return (
    <div className="App">
      <input type='search' placeholder='seach monsters' onChange={e => {
        //Call the callback to use the value as 
        //second parmeter of setstate
        //because its async operation in reacte
        this.setState({ searchField: e.target.value }, () => console.log(this.state));
      }}/>
      <CardList monsters= {this.state.monsters} />            
    </div>
  );
 }
}
export default App;
