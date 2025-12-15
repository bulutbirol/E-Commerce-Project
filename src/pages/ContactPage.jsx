import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactUs from '../components/home/ContactUs';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;