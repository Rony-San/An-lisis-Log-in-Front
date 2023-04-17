import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/login/Login'

export default function AppRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
        </Routes>
    </div>
  )
}
