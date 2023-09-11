import React, { useState } from 'react'
import Form from './Form'
const AddBook = ({ handleCreateBook }) => {
    const [isopen, setIsopen] = useState(false);
    const handleopen = () => {
        setIsopen(!isopen);
    }
    return (
        <div className='mb-2'>

            <div className="inline-flex bg-gray-100 py-2 px-6 rounded-3xl items-center justify-center space-x-8 hover: cursor-pointer" onClick={() => setIsopen(!isopen)}>
                <span className='text-4xl'>+</span>
                <p className='text-xl' >Add new book</p>
            </div>

            {
                isopen && <div className='w-full h-screen bg-gray-200 z-50 absolute top-36'>
                    <Form handleopen={handleopen} handleCreateBook={handleCreateBook} />
                </div>
            }
        </div>
    )
}

export default AddBook
