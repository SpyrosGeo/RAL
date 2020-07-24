import React from 'react'
import AnimeCard from './AnimeCard'
import { Link } from 'react-router-dom'

export default function AnimeList({animeList}) {
    return(
        <section className='cards'>
            {animeList.map(anime => (
                <Link to={`/anime/${anime.mal_id}`}>
                 <AnimeCard key={anime.mal_id} anime={anime} />
                </Link>
            ))}
        </section>)
}
