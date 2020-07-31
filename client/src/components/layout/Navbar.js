import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon, icon2 }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const {clearContacts} = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  }

  const authLinks = (

    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i><span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  )

  const gestLinks = (

    <Fragment>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
    </Fragment>
  )

  return (
    <div className='navbar bg-primary'>
      <h1>
        <ul>
          <li><i className={icon} />
            <Link to='/'>{title}</Link>
          </li>
        </ul>
      </h1>
      <ul>
        {isAuthenticated ? authLinks : gestLinks}
      </ul>
    </div>
  )
}

Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  icon2: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-address-book',
  icon2: 'fas fa-pen-alt'
}

export default Navbar 