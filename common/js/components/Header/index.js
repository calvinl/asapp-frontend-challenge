import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const menuItems = [
  { name: 'Home', to: '/', exact: true },
  { name: 'Todos', to: '/todos' }
];

class HeaderView extends Component {
  render() {
    return (
      <Menu size="massive" fixed="top">
        {menuItems.map(item => (
          <Menu.Item {...item} as={NavLink} key={item.name}>
            {item.name}
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default HeaderView;
