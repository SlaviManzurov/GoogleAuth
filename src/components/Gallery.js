import { useState, useEffect } from 'react'

import './Gallery.css'

import Header from "./Header";
import Card from './Card'
import * as cardServices from './services/cardServices'

function Gallery() {

    const [cards, setCards] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        cardServices.getAll()
            .then(res => setCards(res))
    }, [])


    return (
        <div>
            <Header />
            <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
            <div className='cards'>
                {cards
                    .filter(
                        post => {
                            if (query === '') {
                                return post;
                            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                                return post;
                            }
                        }
                    )
                    .map(post =>
                        <Card key={post.id} {...post} />
                    )}
            </div>
        </div>
    )
}

export default Gallery;