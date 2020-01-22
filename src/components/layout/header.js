import React from 'react';

const header = (props) => {
    return (
        <div>
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                    <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                    Project Name
                    </Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>
                    <Menu.Item as={Link} onClick={this.onSignout}>Logout</Menu.Item>
                    
                </Container>
            </Menu>

        </div>
    );
}

export default header;
