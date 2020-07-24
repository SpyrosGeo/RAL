import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import AnimeList from './components/AnimeList';
import { Switch, Route, useParams } from 'react-router-dom';
import AnimePage from './components/AnimePage';

function App() {
  // const [animeList, setAnimeList] = useState([])
  // const [genre, setGenre] = useState(9)
  // const [page, setPage] = useState(2)

  // useEffect(() => {
  //   const fetchAnime = async () => {
  //     const responce = await axios.get(`https://api.jikan.moe/v3/genre/anime/8/1`)
  //     const { anime } = responce.data
  //     setAnimeList(anime)
  //     // console.log(anime)
  //   }
  //   fetchAnime()
  // }, [])
  const animeList = [
    {
      title: "Test",
      mal_id: 1
    },
    {
      title: "test2",
      mal_id: 2
    },
    {
      title: "Test3",
      mal_id: 3
    }
  ]
  // const handleGenre = (val) => {
  //   setGenre(val)
  // }
  // const handleNext = ()=>{
  //   setPage(page+1)
  //   console.log(page)
  // }
  const findAnime = (id) => {
    return animeList.find(anime => {
      console.log('mal_id', typeof (anime.mal_id))
      return anime.mal_id.toString() === id
    })
  }
  // console.log(findAnime(2))
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <AnimeList animeList={animeList} />
        </Route>
        <Route path="/anime/:id"
          render={(routeProps) => (<AnimePage anime={findAnime(routeProps.match.params.id)} />)}>

        </Route>

      </Switch>

    </div>
  );
}

export default App;
