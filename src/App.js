import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';
import styles from './App.css';

const App = () => (
  <>
    <Header />
    <div className={styles.App}>
      <Character 
        img="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        name="Rick Sanchez"
        species="Human" />
      <Character 
        img="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        name="Morty Smith"
        species="Human" />
      <Character 
        img="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        name="Summer Smith"
        species="Human" />
      <Character 
        img="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        name="Beth Smith"
        species="Human" />
      <Character 
        img="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        name="Jerry Smith"
        species="" />
      <Character 
        img="https://rickandmortyapi.com/api/character/avatar/47.jpeg"
        name="Bird Person"
        species="Alien" />
      <Character 
        img="https://rickandmortyapi.com/api/character/avatar/69.jpeg"
        name="Commander Rick"
        species="Human" />
      <Character 
        img="https://rickandmortyapi.com/api/character/avatar/72.jpeg"
        name="Cool Rick"
        species="Human" />
      <Character 
        img="https://rickandmortyapi.com/api/character/avatar/74.jpeg"
        name="Cop Rick"
        species="Human" />
      <Character 
        img="https://rickandmortyapi.com/api/character/avatar/78.jpeg"
        name="Cowboy Rick"
        species="Human" />
    </div>
    <Footer />
  </>
);

export default App;