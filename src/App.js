import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';

function App() {

   const onClose = (id)=>{
      setCharacters(characters.filter((character)=>{
         return character.id !== Number(id)})
      )
   }
   
   
   const onSearch = (id)=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })}

   const [characters, setCharacters] = useState([{
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   }]);


   
   
   return (
      <div className='App'>
      <Nav onSearch = {onSearch} />
      <Cards characters={characters} onClose={onClose} />
      </div>
   );
}



export default App;
