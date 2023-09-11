import React, { useState } from 'react'
import GetData from './GetData'
import LoginForm from './LoginForm';

const NavBar = () => {
  const [login, setLogin] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLogin = (valid) => {
    setLogin(valid === "yes")
  }

  const handleOpen = () => {
    setOpen(!open);
  }
  return (
    <>
      <div className='flex justify-between mb-3 p-3 bg-sky-700 text-white text-3xl relative'>
        <p className=''>BookStore</p>
        {
          !login && <button onClick={() => setOpen(!open)}>login</button>
        }
      </div>
      <GetData login={login} />
      {open && <LoginForm handleLogin={handleLogin} handleOpen={handleOpen} />}
    </>
  )
}

export default NavBar
