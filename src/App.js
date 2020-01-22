import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import fire from './configs/Fire';

class App extends Component {
  state={
    user:null
  }
  constructor(props)
  {
    super(props);
    this.authListener=this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }
  
  authListener()
  {
    fire.auth().onAuthStateChanged((user)=>
    {      
      this.setState({user});
      localStorage.setItem('user',JSON.stringify(user));
      
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.user?(<Home />):(<Login />)}
      </div>
    );
  }
}


export default App;
