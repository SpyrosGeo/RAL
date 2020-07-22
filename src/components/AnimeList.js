import React from 'react'
import AnimePage from './AnimePage'

export default function AnimeList({animeList}) {
    return(
        <section className='cards'>
            {animeList.map(anime => (
                <AnimePage key={anime.mal_id} anime={anime} />
            ))}
        </section>)
}
