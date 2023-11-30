import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed flex w-full h-[80px] justify-between md:justify-around items-center px-4 text-[#000000]'>
            <div>
                <Link to='home' className='cursor-pointer'>
                    <h1 className='font-bold text-2xl text-black'>
                        DigiWallet
                    </h1>
                </Link>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link
                        to='/home'
                        className='hover:text-[#eeeeee] text-[#737373] font-semibold duration-300'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to='/transfer'
                        className='hover:text-[#eeeeee] duration-300 font-semibold'>
                        Transfer
                    </Link>
                </li>
                <li>
                    <Link
                        to='/topup'
                        className='hover:text-[#eeeeee] duration-300 font-semibold'>
                        Topup
                    </Link>
                </li>
                <li>
                    <Link
                        to='/games'
                        className='hover:text-[#eeeeee] duration-300 font-semibold'>
                        Games
                    </Link>
                </li>
                <li>
                    <Link
                        to='/'
                        className='hover:text-[#eeeeee] duration-300 font-semibold'>
                        Logout
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? (
                    <FaBars className='hover:cursor-pointer' />
                ) : (
                    <FaTimes className='hover:cursor-pointer' />
                )}
            </div>

            {/* Mobile Menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'md:hidden absolute top-0 left-0 w-full h-screen bg-[#082032] flex flex-col justify-center items-center'
                }>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='home'
                        className='hover:text-orange-600'>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='about'
                        className='hover:text-orange-600'>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='skills'
                        className='hover:text-orange-600'>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='work'
                        className='hover:text-orange-600'>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='contact'
                        className='hover:text-orange-600'>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
