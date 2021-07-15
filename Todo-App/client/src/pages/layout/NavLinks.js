import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useAuth } from './../../redux/hooks';
import Spinner from './../../atoms/Spinner';

const NavLinks = () => {
  const { isAuthenticated, logoutUser, user, loading } = useAuth();

  return loading ? (
    <div className="position-absolute" style={{ top: '50%', left: '50%' }}>
      <Spinner animation="grow" />
    </div>
  ) : (
    <Navbar.Collapse id="responsive-navbar-nav">
      {isAuthenticated && (
        <>
          <Nav className="navbar navbar-expand-lg navbar-light bg-light"></Nav>
          <Nav>
            <NavDropdown title={'User Name: ' + user?.name} id="navbar-nav-dropdown">
              <NavDropdown.Item as={Link} to="/" onClick={() => {

                logoutUser()
                }}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      )}
    </Navbar.Collapse>
  );
};
export default NavLinks;
