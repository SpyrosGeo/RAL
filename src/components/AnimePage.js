import React from 'react'

export default function AnimePage({anime}) {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={anime.image_url} alt='anime portrait' />
                </div>
                <div className="card-back">
                    <h1>{anime.title}</h1>
                    <ul>
                        <li><strong>Episodes:</strong> {anime.episodes}</li>
                        <li><strong>Score:</strong> {anime.score}</li>
                        <li><strong>Source:</strong> {anime.source}</li>
                        <li><strong>MyAnimeList <a href={anime.url}><i className="fas fa-external-link-alt"></i></a></strong></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
