import React,{useEffect,useState} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import AnimeList from './components/AnimeList';

function App() {
const [animeList,setAnimeList] = useState([])
const [page,setPage] = useState(1)


useEffect(()=>{
  const fetchAnime =async()=>{
    const responce = await axios.get(`https://api.jikan.moe/v3/genre/anime/9/${page}`)
    const {anime} =responce.data
    setAnimeList(anime)
    console.log(anime)
  }
  fetchAnime()
},[page])

return (
    <div className="container">
      <Header/>
      <AnimeList animeList={animeList}/>
    </div>
  );
}

export default App;
