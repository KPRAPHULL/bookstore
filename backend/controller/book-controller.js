import connection from '../database/connect.js';

// Add new book
const addNewBook = (req, res) => {
    const { title, description, release_date, isbn } = req.body;

    // Insert the book into the database
    // try {
    //     let sql = `INSERT INTO books(title, description, release_date, isbn) VALUES (?, ?, ?, ?)`;
    //     const result = connection.query(sql, [title, description, release_date, isbn]);
    //     res.status(200).send(result)
    // } catch (error) {
    //     res.status(500).send('Error creating book',error);
    // }

    // Insert the book into the database
    let sql = `INSERT INTO books(title, description, release_date, isbn) VALUES (?, ?, ?, ?)`;
    const result = connection.query(sql, [title, description, release_date, isbn], (err, result) => {
        if (err) {
            res.send({id: -1}); // indicate error in inserting
        } else {
            res.send({id: result.insertId})
        }
    });
}

// Fetch all book details
const getAllExisingBook = (req, res) => {
    // Get all the books from the database
    // try {
    //     const rows = connection.query('SELECT * FROM test');
    //     // res.status(200).send(rows);
    //     // console.log(rows);
    //     console.table(rows)
    //     res.send(200);
    // }catch(error) {
    //     res.status(500).send('Error reading books');
    //     console.log(error)
    // }

    // Get all the books from the database
    connection.query('SELECT * FROM books', (err, result) => {
        if (err) {
            res.send("error");
        } else {
            res.send(result)
        }
    });
}

// Delete a book
const deleteExistingBook = (req, res) => {
    const id = req.params.id;

    // Delete the book from the database
    connection.query('DELETE FROM books WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting book');
        }

        res.status(200).send('Book deleted successfully');
    });
    // res.send("hii")
}

// Updata a book
const updateExistingBook = (req, res) => {
    const id = req.params.id;
    console.log(typeof id);
    const { title, description, release_date, isbn } = req.body;

    try {
        connection.query('UPDATE books SET title = ?, description = ?, release_date = ?, isbn = ? WHERE id = ?',
            [title, description, release_date, isbn, id]);
        res.status(200).send('Updated successfully');
    } catch (error) {
        console.log(error)
        res.status(500).send('Error in updating');
    }
}


const validateUser = (req, res) => {
    const { username, password } = req.body;
    // console.log(uname, password)
    try {
        connection.query(
            `SELECT * FROM users 
            WHERE uname = ? AND password = ? AND isadmin = 1`,
            [username, password],
            (err, result) => {
                if (err) {
                    res.send("error");
                    return;
                }
                if (result.length == 0) {
                    res.send({ valid: "no" })
                } else {
                    res.send({ valid: "yes" })
                }

            })

    } catch (error) {

    }
}
export { addNewBook, getAllExisingBook, updateExistingBook, deleteExistingBook, validateUser }

