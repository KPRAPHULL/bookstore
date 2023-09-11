import React, { useState } from 'react'

const url = "http://localhost:5000/api/user"
const LoginForm = ({ handleLogin, handleOpen }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const verify = async (e) => {
        e.preventDefault();
        console.log(username, password)
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            let { valid } = await response.json();
            console.log(valid)
            handleLogin(valid);
            handleOpen()
        } catch (error) {

        }
    }
    return (
        <div className='w-1/4 shadow shadow-slate-700 rounded mx-auto absolute top-32 right-32'>
            <p className='shadow-md shadow-blue-300 py-3 text-3xl text-center text-white bg-sky-600'>Login User</p>
            <form className='p-5 space-y-2' onSubmit={verify}>
                <input className='py-3 px-4 ' type="text" name="username" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                <input className='py-3 px-4' type="password" name="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <button className='block bg-sky-200 py-3 px-4 text-white text-xl rounded fond-bold hover:bg-sky-500'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm
