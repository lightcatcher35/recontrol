import React, { Component } from 'react'
//import {Link,NavLink} from 'react-router-dom'
import {
    Container,
    Header,
    Image,
  } from 'semantic-ui-react'
import fire from '../../configs/Fire'
import Calendar from '../Callendar';


class Home extends Component {
    constructor(props)
    {
        super(props);
        this.onSignout=this.onSignout.bind(this);
    }

    onSignout()
    {
        console.log("çıkk");
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <Container fluid style={{ marginTop: '7em',padding:'50px',paddingTop:'10px'}}>
                    <Header as='h1'>Haftalık Randevu Programı</Header>
                    <Calendar/>
                </Container>
            </div>
        )
    }
}

export default Home;