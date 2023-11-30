import { useState } from 'react';
import Header from '../../components/Header';
import '../../alert.css'
import axios from 'axios';

const Transfer = () => {
    // make alert if input is empty 
    let [from, setFrom] = useState('');
    let [to, setTo] = useState('');
    let [amount, setAmount] = useState('');
    let [description, setDescription] = useState('');

    const dataTransfer = {
        from: from,
        to: to,
        amount: amount,
        description: description,
    };

    type TransferResponse = {
        from: string;
        to: string;
        amount: string;
        description: string;
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

        if (description === '') {
            document.querySelector('#descAlert')?.classList.remove('hide');
            return false;
        } else {
            document.querySelector('#descAlert')?.classList.add('hide');
        }

        try {
            const { data } = await axios.post<TransferResponse>(
                'https://2948-103-75-52-42.ap.ngrok.io/transfer',
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

            <div className="flex flex-col justify-center min-h-screen ">
                <div className="w-full p-6 m-auto bg-white lg:max-w-xl">
                    <h1 className="font-bold text-center text-3xl">Transfer</h1>
                    <div className="flex flex-col gap-3">
                        <label
                            htmlFor="from"
                            className="block text-sm font-bold text-gray-800"
                        >
                            From
                        </label>
                        <input
                            type="text"
                            id="from"
                            className="justify-start block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="12345618911"
                            onChange={(e) => setFrom(e.target.value)}
                        />
                        <div className="bg-white-100 rounded-lg text-base text-red-700 mb-3 hide" id='fromAlert' role="alert">
                            Please insert from of transfer
                        </div>
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="to"
                            className="block text-sm font-bold text-gray-800"
                        >
                            To
                        </label>
                        <input
                            type="text"
                            id="to"
                            className="justify-start block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="12345618911"
                            onChange={(e) => setTo(e.target.value)}
                        />
                        <div className="bg-white-100 rounded-lg text-base text-red-700 mb-3 hide" id='toAlert' role="alert">
                            Please insert to of transfer
                        </div>
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="amount"
                            className="block text-sm font-bold text-gray-800"
                        >
                            Amount
                        </label>
                        <input
                            type="text"
                            id="amount"
                            className="justify-start block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="1.000.000"
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <div className="bg-white-100 rounded-lg text-base text-red-700 mb-3 hide" id='amountAlert' role="alert">
                            Please insert amount of transfer
                        </div>
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="description"
                            className="block text-sm font-bold text-gray-800"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md ffocus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40 justify-start"
                            placeholder="Bayar Hutang"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div className="bg-white-100 rounded-lg text-base text-red-700 mb-3 hide" id='descAlert' role="alert">
                            Please insert description of transfer
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#23A6F0] rounded-md hover:bg-[#1e96db] focus:outline-none focus:bg-[#1e96db]"
                            onClick={handleSubmit}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transfer;
