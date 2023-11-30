import { useState } from 'react';
import Header from '../../components/Header';
import '../../alert.css'
import axios from 'axios';

const TopUp = () => {
    let [from, setFrom] = useState('');
    let [to, setTo] = useState('');
    let [amount, setAmount] = useState('');

    const dataTransfer = {
        from: from,
        to: to,
        amount: amount,
    };

    type TransferResponse = {
        from: string;
        to: string;
        amount: string;
    };

    const handleSubmit = async () => {
        if (from === '') {
            document.querySelector('#fromAlert')?.classList.remove('hide');
            return false;
        } else {
            document.querySelector('#fromAlert')?.classList.add('hide');
        }

        if (to === '') {
            document.querySelector('#toAlert')?.classList.remove('hide');
            return false;
        } else {
            document.querySelector('#toAlert')?.classList.add('hide');
        }

        if (amount === '') {
            document.querySelector('#amountAlert')?.classList.remove('hide');
            return false;
        } else {
            document.querySelector('#amountAlert')?.classList.add('hide');
        }

        try {
            const { data } = await axios.post<TransferResponse>(
                'https://2948-103-75-52-42.ap.ngrok.io/topup',
                dataTransfer,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                }
            );
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
            <Header />

            <div className='h-screen w-full flex justify-center items-center'>
                <div className='flex flex-col gap-8'>
                    <h1 className='font-bold text-[5vmin] text-center'>
                        Top Up
                    </h1>

                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='from' className='font-bold'>
                                From
                            </label>
                            <select
                                defaultValue={'DEFAULT'}
                                className='outline-none bg-white border-[1px] border-[#4F4F4F] py-1 px-6 rounded-[5px]' id='from'>
                                <option value='DEFAULT'>Bank Transfer</option>
                                <option value='1'>Visa Card</option>
                                <option value='2'>Cash</option>
                            </select>
                            <div className="bg-white-100 rounded-lg text-base text-red-700 mb-3 hide" id='fromAlert' role="alert">
                                Please insert From of transfer
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='to' className='font-bold'>
                                To
                            </label>
                            <input
                                type='text'
                                id='to'
                                className='border-[#4F4F4F] outline-none border-[1px] w-full md:w-[350px] p-2 rounded-[5px]'
                                placeholder='to'
                                onChange={(e) => setTo(e.target.value)}
                            />
                            <div className="bg-white-100 rounded-lg text-base text-red-700 mb-3 hide" id='toAlert' role="alert">
                                Please insert to of transfer
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='amount' className='font-bold'>
                                Amount
                            </label>
                            <input
                                type='number'
                                id='amount'
                                className='border-[#4F4F4F] outline-none border-[1px] w-full md:w-[350px] p-2 rounded-[5px]'
                                placeholder='amount'
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <div className="bg-white-100 rounded-lg text-base text-red-700 mb-3 hide" id='amountAlert' role="alert">
                                Please insert amount of transfer
                            </div>
                        </div>

                        <button
                            type='submit'
                            className='p-2 py-3 bg-[#23A6F0] w-full text-white font-bold rounded-[5px] hover:bg-[#1e96db] duration-300'
                            onClick={handleSubmit}>
                            Top Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopUp;
