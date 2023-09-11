import React, { useContext, useState } from 'react'
// import BookContext from '../context/BookContext'
// import { ADD_BOOK } from '../context/action.types'
// import { handleCreateBook } from '../util'

const Form = ({handleopen, handleCreateBook}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [release_date, setReleaseDate] = useState("")
    const [isbn, setIsbn] = useState("")

    // const { dispatch } = useContext(BookContext);
    const add = (e) => {
        e.preventDefault();
        // console.log(e.form.name)
        // chech condition here
        const book = {title, description, release_date, isbn}
        // dispatch({
        //     type: ADD_BOOK,
        //     payload: book
        // })
        handleCreateBook(book)
        handleopen()
        setTitle("")
        setDescription("")
        setReleaseDate("")
        setIsbn("")

    }

    return (
        <div className='w-1/4 shadow shadow-slate-700 rounded mx-auto'>
            <p className='shadow-md shadow-blue-300 py-3 text-3xl text-center text-white bg-sky-600'>Book Details</p>
            <form className='p-5 space-y-2' onSubmit={add}>
                <input className='py-3 px-4 ' type="text" name="title" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                <input className='py-3 px-4' type="text" name="description" placeholder='Book description' value={description} onChange={e => setDescription(e.target.value)} />
                <input className='py-3 px-4' type="text" name="releasedate"
                    placeholder='Release date [DD/MM/YY]'
                    value={release_date}
                    onChange={e => setReleaseDate(e.target.value)}

                />
                <input className='py-3 px-4' type="number" name="isbn" placeholder='ISBN' value={isbn} onChange={e => setIsbn(e.target.value)} />
                <button className='block bg-sky-200 py-3 px-4 text-white text-xl rounded fond-bold hover:bg-sky-500'>ADD</button>
            </form>
        </div>
    )
}

export default Form
