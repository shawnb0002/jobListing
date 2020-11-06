import React, {Component} from 'react';
import './App.css';
// import logo from './logo.svg';
import data from './data.json';
import HeaderComponent from './components/HeaderComponent';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    console.log(data)
    return (
      <div className="App">
        <HeaderComponent />

      </div>
    );

  }

}

export default App;
