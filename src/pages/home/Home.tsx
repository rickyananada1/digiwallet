import { useEffect, useState } from 'react';
import Header from '../../components/Header';
// import { UseAxios } from '../../hooks/UseAxios';
import axios from 'axios';
const token = localStorage.getItem('dataSource');
const Home = () => {
    const [transaction, setTransaction] = useState(null);

    interface User {
        id: number;
        email: string,
        password: string,
        first_name: string,
        last_name: string,
    }
    
    
    axios.get<User[]>('https://2948-103-75-52-42.ap.ngrok.io/details', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then((response) => { 
        console.log(response);
    }).catch((error) => {
        console.log("error");
    });
    // const getData = async () => {
    //     try {
    //         const { data } = await axios.get('https://c053-143-92-127-34.ap.ngrok.io/details', {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //                 "Authorization" : "Bearer " + token
    //             }
    //         });
    //         console.log(data);

    //         return data;
    //     } catch (error) {
    //         if (axios.isAxiosError(error)) {
    //             console.log('error message: ', error.message);
    //             return error.message;
    //         } else {
    //             console.log('unexpected error: ', error);
    //             return 'An unexpected error occurred';
    //         }
    //     }
    // }

    // useEffect(() => {
    //     getData();
    // }, []);




    return (
        <>
            <Header />

            <div className='h-screen max-w-[1024px] mx-auto gap-[15%] flex pt-[10%] items-center flex-col'>
                <div className='self-start flex flex-col w-full'>
                    <div>
                        <h1 className='font-bold text-[5vmin]'>Good morning, Asep!</h1>
                        <span className='font-semibold text-[3vmin]'>Account: 13099441122</span>
                    </div>

                    <div className='self-end'>
                        <p className='font-semibold text-[3vmin] text-right'>Balance:</p>
                        <h1 className='font-semibold text-[5vmin]'>IDR 13.750.000,00</h1>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-5">
                    <div className='flex justify-between w-full'>
                        <div className='flex items-center justify-between gap-4'>
                            <label htmlFor="">Show</label>

                            <select defaultValue={'DEFAULT'} className='outline-none bg-gray-100 py-1 px-3 rounded-[5px]'>
                                <option value="DEFAULT" disabled hidden>Last 10 transactions</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                            </select>
                        </div>

                        <div className='flex items-center justify-between gap-4'>
                            <label htmlFor="">Sort By</label>
                            <select defaultValue={'DEFAULT'} className='outline-none bg-gray-100 py-1 px-4 rounded-[5px]'>
                                <option value="DEFAULT" disabled hidden>Date</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </select>
                            <select defaultValue={'DEFAULT'} className='outline-none bg-gray-100 py-1 px-6 rounded-[5px]'>
                                <option value="DEFAULT" disabled hidden>Descending</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </select>

                            <div className="border rounded overflow-hidden flex bg-[gray-100]">
                                <button className="flex items-center justify-center px-4 bg-gray-100">
                                    <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                                </button>
                                <input type="text" className="px-4 py-2 bg-gray-100 outline-none" placeholder="Search..." />
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full border-[1px]">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-bold text-black px-6 py-4 text-left">
                                                Date & Time
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-black px-6 py-4 text-left">
                                                Type
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-black px-6 py-4 text-left">
                                                From / To
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-black px-6 py-4 text-left">
                                                Description
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-black px-6 py-4 text-left">
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-gray-100 border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">20:10 - 30 June 2022</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                DEBIT
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                310001001
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Fore Coffee
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                - 75.000,00
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">20:10 - 30 June 2022</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                CREDIT
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1001
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Topup from Bank Transfer
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                + 1.000.000,00
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
