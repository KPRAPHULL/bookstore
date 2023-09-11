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
        <div className='shadow shadow-slate-500 max-w-sm  min-w-[384px] p-3 my-4 rounded mx-auto'>
            <p className='shadow-md shadow-blue-300 py-3 text-3xl text-center text-white bg-sky-600'>Login User</p>
            <form className='p-5 space-y-2' onSubmit={verify}>

                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Username
                    </span>
                    <input type="text" name="username" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex: admin" value={username} onChange={e => setUsername(e.target.value)} />
                </label>

                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="password" name="username" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="ex: admin" value={password} onChange={e => setPassword(e.target.value)} />
                </label>

                <button className='shadow bg-blue-300 p-2 text-xl text-white rounded relative top-2 hover:bg-sky-600'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm
