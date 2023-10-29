import { useState } from 'react';
import css from './components/css/App.module.css';
import NavigationBar from './components/NavigationBar';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';



function App() {

  return (

      <div className={css.App}>
        <NavigationBar />
        <Container className={css.Main}>
          <Routes>
            <Route exact path="/" element={<h1>Home Page</h1>} />
            <Route path="/signin" element={<h1>Sign In</h1>} />
            <Route path="/signup" element={<h1>Sign Up</h1>} />
           <Route path="*" element={<p>Page Not Found</p>} />
           </Routes>
        </Container>
        </div>
  )
}

export default App
