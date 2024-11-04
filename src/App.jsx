import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
function App() {
  

  return (
    <>
      <Navbar />
      <SideBar />

      <div>
          <section>
              <Outlet />
          </section>
      </div>
    </>
  )
}

export default App
