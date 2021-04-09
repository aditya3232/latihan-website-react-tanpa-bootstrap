// halaman home yang berisi komponen jumbotron
import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Jumbotron from '../Jumbotron';

function Home() {
  return (
    <>
      <Jumbotron />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
