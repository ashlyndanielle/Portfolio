import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import contactStyles from './styles/contact.module.scss';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact Me</h2>
      <form name="contact" method="POST" netlify>
        <div className={contactStyles.inputContainer}>
          <input type="text" name="name" id="name" required></input>
          <label for="name">Name</label>
        </div>
        <div className={contactStyles.inputContainer}>
          <input type="text" name="email" id="email" required></input>
          <label for="email">Email</label>
        </div>
        <div className={contactStyles.inputContainer}>
          <input type="text" name="subject" id="subject" required></input>
          <label for="subject">Subject</label>
          <textarea name="message" id="message" placeholder="message" rows="7"></textarea>
        </div>
      </form>
    </Layout>
  )
}

export default ContactPage;