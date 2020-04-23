import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div class="alert alert--sucess">
        <h2>Success</h2>
        <p>Thank you for reaching out, I will get back to you as soon as I can. In the meantime, feel free to browse my <Link to="/projects">work</Link>.</p>
      </div>
    </Layout>
  )
}

export default ContactPage;