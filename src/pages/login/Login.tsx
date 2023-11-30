import { useState } from 'react';
import BgPerson from '../../assets/imgLogin.png';
import HeaderLoginRegister from '../../components/HeaderLoginRegister';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dataUser = {
        email: email,
        password: password,
    };

    type CreateUserResponse = {
        email: string;
        password: string;
        token: string;
    };

    const handleSubmit = async () => {

        try {
            const data = await axios.post(
                'https://2948-103-75-52-42.ap.ngrok.io/login',
                dataUser,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                }
            );
            navigate('/');
            let newToken = data.data.data.token;
            localStorage.setItem('dataSource', newToken);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    };

    return (
        <>
            <HeaderLoginRegister />

            <div className='flex h-screen w-full'>
                <div className='w-[60%] h-full flex items-center justify-center'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-[5vmin]'>Login</h1>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                id='email'
                                className='border-[#4F4F4F] outline-none border-[1px] w-full md:w-[350px] p-2 rounded-[5px]'
                                placeholder='email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                className='border-[#4F4F4F] outline-none border-[1px] w-full md:w-[350px] p-2 rounded-[5px]'
                                placeholder='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type='submit'
                            className='p-2 bg-[#23A6F0] text-white font-bold rounded-[5px] hover:bg-[#1e96db] duration-300'
                            onClick={handleSubmit}>
                            Submit
                        </button>

                        <div className='flex gap-1'>
                            <p>Don't have an account yet?</p>
                            <Link
                                to='/register'
                                className='text-[#23A6F0] hover:text-[#1e96db] duration-300'>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] h-full flex items-center justify-center bg-[#23A6F0]'>
                    <img src={BgPerson} alt='' className='w-[400px]' />
                </div>
            </div>
        </>
    );
};

export default Login;
