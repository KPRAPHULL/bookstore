import React, { useState, useEffect } from 'react'
import BookDetails from './BookDetails'
import AddBook from './AddBook';


const url = "http://localhost:5000/api/book"
const GetData = ({ login }) => {
    // const [fillform, setFillform] = useState(false);
    const [books, setBooks] = useState([])


    useEffect(() => {
        getBook();
    }, [])

    // Get books
    const getBook = async () => {
        const response = await fetch(url);
        let data = await response.json();
        setBooks(data);
    }

    // Add book
    const handleCreateBook = async (book) => {
        // Create a new book in the API
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(book)
            });
            const { id } = await response.json();
            setBooks([...books, {...book, id}]);
        } catch (error) {

        }

    };

    // Update book
    const handleUpdateBook = async (id, book) => {
        try {
            await fetch(`${url}/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(book)
            });
            let filterBook = books.filter((book) => book.id !== id) // not select updated book
            setBooks([...filterBook, {...book, id}]);
        } catch (error) {

        }

    }

    // Delete book
    const handleDeleteBook = async (id) => {
        try {
            await fetch(`${url}/${id}`, {
                method: 'DELETE'
            });
            setBooks(books.filter((book) => book.id !== id));
        } catch (error) {

        }

    }

    const operation = { handleCreateBook, handleUpdateBook, handleDeleteBook }
    return (
        <div>
            {
                login && <AddBook handleCreateBook={handleCreateBook} />
            }
            {
                books.length === 0 ? <p>No book is available</p> :
                    <ul className='flex flex-col items-center md:justify-center md:flex-row md:flex-wrap md:gap-x-8'>
                        {
                            books.map((item) => (<BookDetails item={item} login={login} operation={operation} />))
                        }
                    </ul>
            }
        </div>
    )
}

export default GetData
