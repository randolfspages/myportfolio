import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='fixed left-0 right-0 top-0 p-5 bg-black h-20 flex justify-between items-center'>
        <div className='text-white'>Name</div>
            <ul className='
                sm:flex 
                sm:text-white 
                sm:justify-center 
                sm:gap-x-8 
                sm:border 
                sm:rounded-full 
                sm:px-10 
                sm:py-2
                sm: shadow-inner bg-stone-900 p-4 rounded
                border-stone-900
                sm:text-sm'>
                <li>
                    <NavLink   NavLink to='/'>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/profile'>
                        Profile
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/portfolio'>
                        Portfolio
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className='text-white'>menu-icon</div>
    </nav>
  )
}

export default Navbar