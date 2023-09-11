import { ADD_BOOK, REMOVE_BOOK, UPDATE_BOOK } from './action.types'
const bookReducer =  (state, action) => {
    switch(action.type) {
        case ADD_BOOK:
            return [...state, action.payload]
        case REMOVE_BOOK:
            return state.filter(todo => todo.id !== action.payload)
        case UPDATE_BOOK:
            return [...state, action.payload]
        default:
            return state
    }
}
export default bookReducer;