import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const menuItems = [
  { name: 'Split Screen', to: '/', exact: true },
  { name: '@rob', to: '/channel?participants=rob', exact: true },
  { name: '@tina', to: '/channel?participants=tina' },
  { name: '@tina, @rob...', to: '/channel?participants=tina,rob,bill,fred' },
  { name: '#design', to: '/channel?name=design' }
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
