import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import fire from './configs/Fire';
import {info} from './configs/App';

import {userUpdate} from './actions/userAction';
import {Route} from 'react-router-dom';
//import Auth from './helpers/auth';
import {connect} from 'react-redux';

class App extends Component {
  state={
    user:null,
    allow:false
  }
  constructor(props)
  {
    super(props);
    this.authListener=this.authListener.bind(this);
  }
  componentDidMount() {
    
    this.authControl();
    this.authListener();
  }
  
  authListener()
  {
    fire.auth().onAuthStateChanged((user)=>
    {
      
      this.setState({user});
      localStorage.setItem('user',JSON.stringify(user));

      if(this.state.user) this.setState({allow:true});
      else this.setState({allow:false});
    })
  }
  authControl=()=>
  {
      let userLocal=localStorage.getItem("user");
      if(userLocal)
      {
        this.setState({allow:true});
      }
  }

  content=(
  <div>
    <Header  app={info}/>
    <Route exact path="/" component={Home} app={info}/>
    <Route exact path="/graph"  component={Home} app={info}/>
    <Route exact path="/list"  component={Home}  app={info}/>
    <Footer app={info}/>
  </div>);

  render() {
    return (
      <div className="App" loading="true">
        
        {this.state.allow?this.content:(<Login />)}
      </div>
    );
  }
}
const mapPropsToState=({user})=>{
  return {user}
};
const mapDispatchToState={
  userUpdate
};

export default connect(mapPropsToState,mapDispatchToState)(App);
