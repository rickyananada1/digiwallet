import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderLoginRegister = () => {
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
                    <NavLink
                        end
                        to={'/home'}
                        className='hover:text-[#ffffff] duration-300 font-semibold'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        end
                        to={'/'}
                        className='hover:text-[#ffffff] duration-300 font-semibold'>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        end
                        to={'/register'}
                        className='hover:text-[#ffffff] duration-300 font-semibold'>
                        Register
                    </NavLink>
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
                        : 'md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center text-gray-600'
                }>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='home'
                        className='hover:text-[#eeeeee] duration-200'>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='/'
                        className='hover:text-[#eeeeee] duration-200'>
                        Login
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleClick}
                        to='register'
                        className='hover:text-[#eeeeee] duration-200'>
                        Register
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderLoginRegister;
