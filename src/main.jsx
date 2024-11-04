import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Profile from './pages/Profile.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'


const router = createHashRouter([
  {path:'/', element: <App />,
   children: [
    {path:'/profile', element: <Profile />},
    {path:'/portfolio', element: <Portfolio />},
    {path:'/contact', element: <Contact />}
  ]}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
