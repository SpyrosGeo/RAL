import React,{useEffect,useState} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import AnimeList from './components/AnimeList';

function App() {
const [animeList,setAnimeList] = useState([])
const[genre,setGenre] = useState(9)
const [page,setPage] = useState(2)


useEffect(()=>{
  const fetchAnime =async()=>{
    const responce = await axios.get(`https://api.jikan.moe/v3/genre/anime/${genre}/${page}`)
    const {anime} =responce.data
    setAnimeList(anime)
    console.log(anime)
  }
  fetchAnime()
},[page])

const handleGenre =(val)=>{
  setGenre(val)
}
  return (
    <div className="container">
      <Header/>
      <AnimeList animeList={animeList}/>
    </div>
  );
}

export default App;
