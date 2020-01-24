import React, { Component } from 'react'
import fire from '../../configs/Fire';
import {Link,NavLink} from 'react-router-dom';
import {
    Container,
    Image,
    Menu,
    Input,
    Icon
  } from 'semantic-ui-react'

class Header extends Component {
    constructor(props)
    {
        super(props);
        this.onSignout=this.onSignout.bind(this);
    }

    onSignout()
    {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                        {this.props.app.project_name}
                        </Menu.Item>
                        <Menu.Item as={Link} to="/">Anasayfa</Menu.Item>
                        <Menu.Item as={NavLink} to="/graph">Grafik</Menu.Item>
                        <Menu.Item as={NavLink} to="/list">Listeleme</Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Input icon='search' placeholder='Search...' />
                            </Menu.Item>
                            <Menu.Item as="a" onClick={this.onSignout}>
                                
                                <Icon name="sign-out" size="large"/> Çıkış 
                            </Menu.Item>
                    </Menu.Menu>
                    </Container>
                </Menu>

            </div>
        )
    }
}

export default Header;