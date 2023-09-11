import React, { useEffect, useState } from 'react'
import GetData from './GetData'
import LoginForm from './LoginForm';

const Home = () => {
  const [login, setLogin] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const valid = localStorage.getItem('login');
    setLogin(valid === 'yes')
  }, [])

  const handleLogin = (valid) => {
    setLogin(valid === "yes")
    localStorage.setItem('login', valid);
  }

  const handleOpen = () => {
    setOpen(!open);
  }
  return (
    <div className='relative'>
      <div className='flex justify-between mb-3 p-3 bg-sky-700 text-white text-3xl relative'>
        <p className=''>BookStore</p>
        {
          !login && <button onClick={() => setOpen(!open)}>Log in</button>
        }
        {
          login && <button onClick={() => handleLogin("no")}>Log out</button>
        }
      </div>
      <GetData login={login} />
      {
        open && <div className='w-full h-screen bg-gray-200 z-50 absolute top-20'><LoginForm handleLogin={handleLogin} handleOpen={handleOpen} />
        </div>}
    </div>
  )
}

export default Home
