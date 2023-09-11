const url = "http://localhost:5000/api/book"

// Add book
const handleCreateBook = async (book) => {
    // Create a new book in the API
    // let book = { title, description, release_date, isbn }
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        });
        // return response.json();
        // setBooks([...books, book]);
    } catch (error) {

    }

};

// Get books
const getBook = async () => {
    const response = await fetch(url);
    let data = await response.json();
    // setBooks(data);
}

// Update book
const handleUpdateBook = async (id, book) => {
    // let book = { title, description, release_date, isbn }
    await fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
    // setBooks([...books, book])
}

// Delete book
const handleDeleteBook = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        // setBooks(books.filter((book) => book.id !== id));
    } catch (error) {

    }

}

export {handleCreateBook, handleDeleteBook, handleUpdateBook, getBook}