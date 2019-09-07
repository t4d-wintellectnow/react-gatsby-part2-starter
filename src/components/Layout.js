import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import ('./Layout.scss');

export const Layout = ({ subTitle, children }) => {

  return (
    <>
      <header>
        <h1>Notes Viewer</h1>
        {subTitle && <h2>{subTitle}</h2>}
      </header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      {children}
      <footer>
        <small>&copy; {new Date().getFullYear()}, A Cool Company, Inc.</small>
      </footer>
    </>
  );

};

Layout.defaultProps = {
  subTitle: '',
};

Layout.propTypes = {
  subTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};