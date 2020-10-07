import React from 'react';
import Helmet from 'react-helmet';
import NavBar from './Navbar/NavBar';
import useSiteMetadata from '../hooks/use-sitemetadata';
import '../styles/App.css'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <main>
        <NavBar />
        {children}
      </main>
    </div>
  )
};

export default Layout;
