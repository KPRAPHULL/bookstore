import React, { useState } from 'react'

const Form = ({ handleopen, handleCreateBook }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [release_date, setReleaseDate] = useState("")
    const [isbn, setIsbn] = useState("")

    // const { dispatch } = useContext(BookContext);
    const add = (e) => {
        e.preventDefault();
        // console.log(e.form.name)
        // chech condition here
        const book = { title, description, release_date, isbn }
        handleCreateBook(book)
        handleopen()
        setTitle("")
        setDescription("")
        setReleaseDate("")
        setIsbn("")

    }

    return (
        <div className='shadow shadow-slate-500 max-w-sm  min-w-[384px] p-3 my-4 rounded mx-auto '>
            <p className='shadow-md shadow-blue-300 py-3 text-3xl text-center text-white bg-sky-600'>Book Details</p>
            <form className='p-5 space-y-2' onSubmit={add}>
                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Book Title
                    </span>
                    <input type="text" name="title" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex: coding book" value={title} onChange={e => setTitle(e.target.value)} />
                </label>

                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Book description
                    </span>
                    <input type="text" name="description" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex: a good book for programmer" value={description} onChange={e => setDescription(e.target.value)} />
                </label>

                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Release date
                    </span>
                    <input type="text" name="releasedate" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex: 15/10/1997" value={release_date} onChange={e => setReleaseDate(e.target.value)} />
                </label>

                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        ISBN no.
                    </span>
                    <input type="number" name="isbn" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex: 1111234567891" value={isbn} onChange={e => setIsbn(e.target.value)} />
                </label>

                <button className='shadow bg-slate-100 p-2 text-xl text-red-500 rounded relative left-40 top-3 hover:bg-slate-300 hover:text-red-600' onClick={handleopen}>Cancel</button>
                <button className='shadow-md bg-sky-300 py-2 px-3 text-xl text-white ml-3 rounded relative left-40 top-3 hover:bg-sky-600' >Add</button>
            </form>
        </div>
    )
}

export default Form
