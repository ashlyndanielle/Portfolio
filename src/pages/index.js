import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>Welcome to my porfolio in progress!</h2>
      <p>Take a look around but please come back again soon as more content will be uploaded and updated every day!</p>
      <p><Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage;