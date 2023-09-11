// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import BookContext from './context/BookContext';
import bookReducer from './context/reducer'
import { useReducer } from 'react';


function App() {
  const initialState = []
  const [todos, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContext.Provider value={{ todos, dispatch }}>
      <div>
        <Router>
          <NavBar />
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Route path='/get' element={<GetData />} />
          <Route path='/send' element={<Form />} />
          <Route path='/update' element={<GetData />} />
          <Route path='/delete' element={<GetData />} /> */}
          </Routes>
          <Footer />
        </Router>
      </div>
    </BookContext.Provider>
  );
}

export default App;
