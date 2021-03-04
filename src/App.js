import React,{Component} from 'react'
import logo from './logo.svg';
import Marksheet from './Component/Marksheet/Marksheet';



import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  this.state={
    rollNo:""
  }}
 
  submitRollNo=()=>{
    let inputVal=document.getElementById("inputVal");
  if(inputVal.value){this.setState({rollNo:inputVal.value})
  inputVal.value=""}
  else{ return null}
  }
  
  render(){
    
  return (
    <div className="App">
      <input type="text"  id="inputVal" placeholder="Enter RollNo"/>
      <button type="submit" onClick={this.submitRollNo}>View Marksheet</button>
    {this.state.rollNo?<Marksheet rollNo={this.state.rollNo}/>:null}
      </div>
  );}
}

export default App;
