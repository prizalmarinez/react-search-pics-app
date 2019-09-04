import React from 'react';
import { Menu, Icon } from 'semantic-ui-react'

const Navbar = () => {
    return (
        <div>
            <Menu>
                <Menu.Item header>
                    React Search Pics Application
                </Menu.Item>
                <Menu.Item position="right">
                    <a href="https://github.com/prizalmarinez?tab=repositories" target="_blank">
                        <Icon name="github" />
                    </a>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Navbar;