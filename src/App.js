import React from 'react';
import './App.css';

class App extends React.Component {
  state={
    person:{
      fullName:["Badreddine","Hajji"],
      bio:"A young man in the 22 years old of his age",
      profession:"A Student",
    },
    show:false
  };
  
  handle=()=>{
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }
  render(){
    return (
      <>
      
      {this.state.show &&  (
        <>
        <article>
        <h1><span>{this.state.person.fullName[0]}</span>{this.state.person.fullName[1]}</h1>
        <h1><span>Bio</span>{this.state.person.bio}</h1>
        <h1><span>Profission</span>{this.state.person.profession}</h1>
        </article>
        </>)}
      <button onClick={this.handle}>Show</button>  
        
      </>
    )
  }
  
}

export default App;
