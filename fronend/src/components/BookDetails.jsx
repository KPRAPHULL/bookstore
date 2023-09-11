import React, { useState } from 'react'
import Update from './Update';

const BookDetails = ({ item, login, operation }) => {
    const [update, setUpdate] = useState(true);
    const { title, description, release_date, isbn, id } = item
    const getUpdate = () => {
        setUpdate(!update)
    }
    return (
        <>
            {
                update ? <li className='shadow shadow-slate-500 max-w-sm  p-3 my-4 mx-auto'>
                    <p className='text-2xl font-semibold p-2 bg-sky-300 text-white text-center'>{title}</p>
                    <p className='bg-gray-100 py-2'>{description}</p>
                    <p className='bg-gray-100 py-2 text-slate-400'><span className='font-bold'>First release:</span> {release_date}</p>
                    <p className='mt-5'>{isbn}</p>
                    <p className='mb-5'>||||||||||||||||||||||||||||||||||||||||||||</p>
                    {
                        login && <>
                            <button
                                className='shadow bg-slate-100 p-2 text-xl text-red-500 rounded relative left-48'
                                onClick={() => operation.handleDeleteBook(id)}
                            >DELETE</button>
                            <button
                                className='shadow-md bg-sky-300 py-2 px-3 text-xl text-white ml-2 rounded relative left-[200px]'
                                onClick={getUpdate}
                            >EDIT</button>
                        </>
                    }
                </li> : <Update item={item} getUpdate={getUpdate} operation={operation} />
            }
        </>


    )
}

export default BookDetails
