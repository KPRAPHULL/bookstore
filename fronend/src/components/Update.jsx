import React, { useState } from 'react'

const Update = ({ item, getUpdate, operation }) => {
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [release_date, setReleaseDate] = useState(item.release_date);
    const [isbn, setIsbn] = useState(item.isbn);

    const update = (e) => {
        // console.log(id)
        let book = { title, description, release_date, isbn }
        e.preventDefault();
        operation.handleUpdateBook(item.id, book)
        getUpdate()
    }
    return (
        <div className='w-1/4 shadow shadow-slate-700 rounded mx-auto'>
            <p className='shadow-md shadow-blue-300 py-3 text-3xl text-center text-white bg-sky-600'>Book Details</p>
            <form className='p-5 space-y-2' onSubmit={update}>
                <input className='py-3 px-4 ' type="text" name="title" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                <input className='py-3 px-4' type="text" name="description" placeholder='Book description' value={description} onChange={e => setDescription(e.target.value)} />
                <input className='py-3 px-4' type="text" name="releasedate"
                    placeholder='Release date [DD/MM/YY]'
                    value={release_date}
                    onChange={e => setReleaseDate(e.target.value)}

                />
                <input className='py-3 px-4' type="text" name="isbn" placeholder='ISBN' value={isbn} onChange={e => setIsbn(e.target.value)} />
                <button className='block bg-sky-200 py-3 px-4 text-white text-xl rounded fond-bold hover:bg-sky-500'>Update</button>
                <button className='block bg-sky-200 py-3 px-4 text-white text-xl rounded fond-bold hover:bg-sky-500' onClick={getUpdate}>Cancel</button>
            </form>
        </div>
    )
}

export default Update
