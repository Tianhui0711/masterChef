import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Menu } from 'antd';
import './styles/antStyle.less';

import AboutModal from './AboutModal.jsx';
import LogInNavItem from './LogInNavItem.jsx';
import Search from './Search.jsx';

export default function NavBar({ user, onUserChange }) {
  return (
    <Row>
      {/* Brand */}
      <Col span={3}>
        <div className="brand">MasterChef</div>
      </Col>

      {/* Menu */}
      <Col span={4}>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/recipe">Recipes</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <AboutModal />
          </Menu.Item>
        </Menu>
      </Col>

      {/* search bar */}
      <Col className="search-bar" span={6}>
        <div className="search">
          <Search />
        </div>
      </Col>

      <Col className="sign-in" span={4} offset={6}>
        <LogInNavItem user={user} onUserChange={onUserChange} />
      </Col>
    </Row>
  );
}
