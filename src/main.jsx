import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './pages/AuthProvider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
// import { RouterProvider } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider >
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthProvider>
    </QueryClientProvider>
    

  </React.StrictMode>,
)
