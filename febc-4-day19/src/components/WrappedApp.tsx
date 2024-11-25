import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../page/Login'
import Dashboard from '../page/Dashboard.tsx'
import App from '../App.tsx'
function WrappedApp() {
  return (
    
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
      )
}

export default WrappedApp
