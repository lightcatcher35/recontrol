import React, { Component } from 'react'
//import {Link,NavLink} from 'react-router-dom'
import {
    Container,
    Header,
    Image,
  } from 'semantic-ui-react'
import fire from '../../configs/Fire'

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
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1'>Semantic UI React Fixed Template</Header>
                    <p>This is a basic fixed menu template using fixed size containers.</p>
                    <p>
                        A text container is used for the main container, which is useful for single column layouts.
                    </p>

                    <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                    <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                </Container>
            </div>
        )
    }
}

export default Home;