import React, { useState } from 'react'
import Helmet from 'react-helmet';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import useSiteMetadata from '../hooks/use-sitemetadata';
import '../styles/App.css'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <main>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        {children}
      </main>
    </div>
  )
};

export default Layout;
