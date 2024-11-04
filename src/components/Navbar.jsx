import { Link, NavLink } from 'react-router-dom'
import { BsMenuUp } from "react-icons/bs";




const Navbar = () => {
  return (
    <header className=' py-4 shadow-lg fixed top-0 left-0 right-0 z-100'>
        <div className=' relative max-w-screen-lg mx-auto flex flex-col sm:flex-row py-4 sm:items-center sm:justify-between'>
            <Link className='flex items-center px-10'>
                <span className='mr-2'>Logo</span>
                <span>Name</span>
            </Link>

            <input className='peer hidden' type="checkbox" id='navbar-open' />
            <label className='sm:hidden cursor-pointer absolute mt-1 right-0 px-10' htmlFor="navbar-open">
                <span className='sr-only'>Toggle Navigation</span>
                <BsMenuUp />
            </label>
            
            <nav aria-label='Header Navigation' className='peer-checked:block sm:block hidden py-4 sm:py-0 sm:justify-start sm:items-center'>
                <ul className='flex flex-col  
                sm:flex-row 
                sm:gap-x-8 
                gap-y-4 
                sm:px-16  
                items-center
                sm:border-2 
                sm:shadow-2xl
                sm:drop-shadow-md 
                sm:rounded-full 
                sm:py-2
                sm: transition-all
                sm:duration-150
                cursor-pointer
                '>
                    <li className='sm:hover:scale-125 sm:hover:shadow-sm sm:duration-200'>
                        <NavLink to="/" className="sm:text-xs">HOME</NavLink>
                    </li>
                    <li className='sm:hover:scale-125 sm:hover:shadow-sm sm:duration-200'>
                        <NavLink to="/profile" className="sm:text-xs">PROFILE</NavLink>
                    </li>
                    <li className='sm:hover:scale-125 sm:hover:shadow-sm sm:duration-200'>
                        <NavLink to="/portfolio" className="sm:text-xs">PORTFOLIO</NavLink>
                    </li>
                    <li className='sm:hover:scale-125 sm:hover:shadow-sm sm:duration-200'>
                        <NavLink to="/contact" className="sm:text-xs">CONTACT</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    </header>

    
  )
}

export default Navbar