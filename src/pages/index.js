import React from 'react';
import { Link } from 'gatsby';

export default function index() {
  return (
    <div>
      <h1> Hello World! </h1>
      <p> Hello New York! </p>
      <Link to='/about/'> Learn about me (my name is mario) &rarr;</Link>
    </div>
  )
}
