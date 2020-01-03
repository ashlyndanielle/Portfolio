import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <p>Want to know more? <Link to="/about">About me!</Link></p>
      <p>Need a dev? <Link to="/contact">Contact me!</Link></p>
    </Layout>
  )
}

export default IndexPage;