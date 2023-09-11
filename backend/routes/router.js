import express from 'express'
import { addNewBook, getAllExisingBook, updateExistingBook, deleteExistingBook, validateUser } from '../controller/book-controller.js'

const router = express.Router();

// for book
router.get('/book', getAllExisingBook)
router.post('/book', addNewBook)
router.patch('/book/:id', updateExistingBook)
router.delete('/book/:id', deleteExistingBook)

// for user
router.post('/user', validateUser);
export default router