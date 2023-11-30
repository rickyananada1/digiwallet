import { useState } from 'react';
import BgPerson from '../../assets/imgLogin.png';
import HeaderLoginRegister from '../../components/HeaderLoginRegister';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const dataUser = {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
    };

    type CreateUserResponse = {
        email: string;
        password: string;
        first_name: string;
        last_name: string;
    };

    const handleSubmit = async () => {
        try {
            const { data } = await axios.post<CreateUserResponse>(
                'https://2948-103-75-52-42.ap.ngrok.io/register',
                dataUser,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                }
            );
            navigate('/login');

            console.log(data);
            console.log(JSON.stringify(data, null, 4));

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
                <div className='w-[60%] h-full flex items-center justify-center pt-[5%]'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-[5vmin]'>Register</h1>
                        <div className='flex flex-col gap-4'>
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='firstName'>First Name</label>
                                <input
                                    type='text'
                                    id='firstName'
                                    className='border-[#4F4F4F] outline-none border-[1px] w-full md:w-[350px] p-2 rounded-[5px]'
                                    placeholder='first name'
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='lastName'>Last Name</label>
                                <input
                                    type='text'
                                    id='lastName'
                                    className='border-[#4F4F4F] outline-none border-[1px] w-full md:w-[350px] p-2 rounded-[5px]'
                                    placeholder='last name'
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>

                            <button
                                type='button'
                                className='p-2 bg-[#23A6F0] text-white font-bold rounded-[5px] hover:bg-[#1e96db] duration-300'
                                onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>

                        <div className='flex gap-1'>
                            <p>Already have an account?</p>
                            <Link
                                to='/login'
                                className='text-[#23A6F0] hover:text-[#1e96db] duration-300'>
                                Login
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

export default Register;
