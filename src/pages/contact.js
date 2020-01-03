import React from 'react';

import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p><strong>Address:</strong> Earth</p>
      <p><strong>Email:</strong> test@gmail.com</p>
      <p><strong>Phone:</strong> (888) 888 - 8888</p>
      <p><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Questions?</a></p>
    </Layout>
  )
}

export default ContactPage;