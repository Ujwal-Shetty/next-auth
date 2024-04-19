"use client"

import Link from 'next/link';
import React,{useState} from 'react'
import { signIn } from 'next-auth/react';
import {toast} from 'react-hot-toast';

export default function page() {

    const [data, setData] = useState({
        email: '',
        password: ''
        })

       const onLogin=async(e)=>{
        e.preventDefault()
                signIn('credentials',
                 {...data, redirect: false
                })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error(callback.error)
                    }

                    if(callback?.ok && !callback?.error) {
                        toast.success('Logged in successfully!')
                    }
                } )
       }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={onLogin} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='email'
          name='email'
          value={data.email}
          onChange={e => setData({ ...data, email: e.target.value })}
          className='border p-3 rounded-lg'
          id='email'
          
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          value={data.password}
          onChange={e => setData({ ...data, password: e.target.value })}
          className='border p-3 rounded-lg'
          id='password'
         
        />

        <button
         
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          Sign in
        </button>
        
        
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link href={'/register'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      
    </div>
  );
}

  

