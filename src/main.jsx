import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './pages/AuthProvider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
// import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider >
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthProvider>

  </React.StrictMode>,
)
