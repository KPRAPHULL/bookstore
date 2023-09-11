import React, { useState } from 'react'
import Form from './Form'
const AddBook = ({ handleCreateBook }) => {
    const [isopen, setIsopen] = useState(false);
    const handleopen = () => {
        setIsopen(!isopen);
    }
    return (
        <div>
            <span className='ml-4 bg-gray-100 py-5 px-6 rounded-3xl space-x-6'>
                <span className='text-5xl'>+</span>
                <button className='text-2xl' onClick={() => setIsopen(!isopen)}>Add new book</button>
            </span>

            {
                isopen && <Form handleopen={handleopen} handleCreateBook={handleCreateBook} />
            }
        </div>
    )
}

export default AddBook
