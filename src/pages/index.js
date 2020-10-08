import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Index = () => {

  return (
    <Layout>
      <h1> Hello World! </h1>
      <p> Hello New York! </p>
      <Link to='/about/'> Learn about me (my name is mario) &rarr;</Link>
    </Layout>
    
  )
}

export default Index;
