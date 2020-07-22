import React, { useState } from 'react'

export default function Search({ getQuery }) {
    const [input, setInput] = useState('')


    const handleChange = (e) => {
        setInput(e.target.value)
        getQuery(input)
    }
    return (
        <section className="search">
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search...'
                    value={input}
                    onChange={handleChange}
                    autoFocus />
            </form>
        </section >
    )
}