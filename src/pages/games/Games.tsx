// import { useEffect, useState } from 'react';
import Header from '../../components/Header';
// import { UseAxios } from '../../hooks/UseAxios';
// import axios from 'axios';

const Games = () => {

    return (
        <>
            <Header />

            <div className='h-screen max-w-[1024px] mx-auto gap-[15%] flex pt-[10%] items-center flex-col'>
                {/* <ul className="container mx-auto divide-y divide-gray-400 divide-dotted">

                  <li className="flex items-center justify-between px-4 py-2">
                    <h1 className='font-bold text-[5vmin] truncate w-96 text-md p-4'>Good morning, Asep!</h1>
                    <p className='font-semibold text-[4vmin] px-2 py-1 ml-5 rounded text-black  rounded-2'>Balance:</p>
                  </li>
                </ul> */}
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between px-4'>
                        <h1 className='font-bold text-[5vmin]'>Good morning, Asep!</h1>
                        <span className='font-semibold text-[3vmin]'>Balance:</span>
                    </div>
                    <div className='flex items-center justify-between px-4'>
                        <p className='font-semibold text-[3vmin] text-right'>Account:13099441122</p>
                        <h1 className='font-semibold text-[4vmin]'>IDR 13.750.000,00</h1>
                    </div>
                </div>
                <div>
                  <h1 className="font-bold text-center text-3xl">Games</h1>
                  <p className="text-center text-3xl">Choose random box below to get reward</p>
                </div>
            <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">

                <div className="my-1 px-1 w-full md:w-6 lg:my-6 lg:px-12 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href='#/'>
                            <h1 className="font-bold text-center text-3xl">Transfer</h1>
                        </a>
                    </article>
                </div>

                <div className="my-1 px-1 w-full md:w-6 lg:my-6 lg:px-12 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href='#/'>
                            <h1 className="font-bold text-center text-3xl">Transfer</h1>
                        </a>
                    </article>
                </div>

                <div className="my-1 px-1 w-full md:w-6 lg:my-6 lg:px-12 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href='#/'>
                            <h1 className="font-bold text-center text-3xl">Transfer</h1>
                        </a>
                    </article>
                </div>

                <div className="my-1 px-1 w-full md:w-6 lg:my-6 lg:px-12 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href='#/'>
                            <h1 className="font-bold text-center text-3xl">Transfer</h1>
                        </a>
                    </article>
                </div>

                <div className="my-1 px-1 w-full md:w-6 lg:my-6 lg:px-12 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href='#/'>
                            <h1 className="font-bold text-center text-3xl">Transfer</h1>
                        </a>
                    </article>
                </div>

                <div className="my-1 px-1 w-full md:w-6 lg:my-6 lg:px-12 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href='#/'>
                            <h1 className="font-bold text-center text-3xl">Transfer</h1>
                        </a>
                    </article>
                </div>

                <div className="my-1 px-1 w-full md:w-6 lg:my-6 lg:px-12 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href='#/'>
                            <h1 className="font-bold text-center text-3xl">Transfer</h1>
                        </a>
                    </article>
                </div>

                <div className="my-1 px-1 w-full md:w-6 lg:my-6 lg:px-12 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href='#/'>
                            <h1 className="font-bold text-center text-3xl">Transfer</h1>
                        </a>
                    </article>
                </div>

                <div className="my-1 px-1 w-full md:w-6 lg:my-6 lg:px-12 lg:w-1/3">
                    <article className="overflow-hidden rounded-lg shadow-lg">
                        <a href='#/'>
                            <h1 className="font-bold text-center text-3xl">Transfer</h1>
                        </a>
                    </article>
                </div>
            </div>
      </div>
            </div>
        </>
    );
};

export default Games;
