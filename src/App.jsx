import { useState } from 'react';
import css from './components/css/App.module.css';
import NavigationBar from './components/NavigationBar';
import { Container } from 'react-bootstrap/Container';


function App() {

  return (

      <div className={css.App}>
        <NavigationBar />
        </div>
  )
}

export default App
