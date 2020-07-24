import React from 'react'
import { useParams } from 'react-router-dom'

export default function AnimePage({anime}) {
    console.log(anime)
    return (
        <div>
            <h1 style={{color:"black"}}>mal_id:{anime.mal_id}</h1>
    <h1 style={{color:"black"}}>{anime.title}</h1>
        </div>
    )
}
