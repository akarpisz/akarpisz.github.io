import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {Container} from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Container>
      <Navbar/>
      <Header/>
      <Body/>
      <Footer/>
      </Container>
    </div>
  );
}

export default App;
