import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

function Header() {
  return (
    <header className='bg-slate-800 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-2 sm:p-4'>
            <Link to='/'>
                <h1 className='text-gray-100 font-bold text-sm sm:text-2xl'>RealEstate</h1>
            </Link>
            <div className="bg-slate-600 p-2 rounded-lg flex items-center">
                <input type="text" placeholder='search' className='w-24 sm:w-64 bg-transparent focus:outline-none'/>
                <FaSearch className='text-gray-100'/>
            </div>

            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='text-gray-100 hidden sm:inline hover:underline cursor-pointer'>Home</li>
                </Link>

                <Link to='/about'>
                    <li className='text-gray-100 hidden sm:inline hover:underline cursor-pointer'>About</li>
                </Link>

                <Link to='sign-in'>
                    <li className='text-gray-100 hover:underline cursor-pointer'>Sign In</li>
                </Link>
            </ul>

        </div>
    </header>
  )
}

export default Header