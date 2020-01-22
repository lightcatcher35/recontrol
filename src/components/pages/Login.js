import React, { Component } from 'react'
import {info} from '../../configs/App';
import fire from '../../configs/Fire'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {Warn} from '../shared/infos';

class Login extends Component {

    constructor(props)
    {
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.onSubmitForm=this.onSubmitForm.bind(this);
    }
    state={
        username:"",
        password:"",
        error:null,
        progressing:false
    }
    handleChange(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmitForm()
    {
        fire.auth().signInWithEmailAndPassword(this.state.username,this.state.password).then((u)=>
        {

        }).catch(error=>{

            console.log(error);
            this.setState({
                "error":error.message
            })
        })
        

    }
    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        {info.project_name} Login
                    </Header>
                    
                    {this.state.error&&<Warn title="Hata" content={this.state.error}/>}
                    <Form size='large' onSubmit={this.onSubmitForm}>
                        <Segment stacked>
                        <Form.Input 
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeholder='E-mail address' />
                        <Form.Input
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button color='teal' fluid size='large'>
                            Login
                        </Button>
                        </Segment>
                    </Form>
                    
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}


export default Login;