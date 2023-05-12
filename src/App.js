import { useState,useEffect } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About/About" 
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

const EMAIL = 'gabo125@gmail.com'
const PASSWORD = 'soyhenry'

function App() {
const navigate = useNavigate();
const [access, setAccess] = useState(false);


function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   
   const onClose = (id) => {
      setCharacters(characters.filter((character) => {
         return character.id !== Number(id)
      })
      )
   }


   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
   }

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
   
   const location = useLocation();
   
   return (  
            
          
      <div className='App'>


         {location.pathname!=="/"&&<Nav onSearch={onSearch}/>}
         
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
         
      </div> 
   );
}




export default App;