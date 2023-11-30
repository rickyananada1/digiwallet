import { FaCheckCircle } from 'react-icons/fa';
import Header from '../../components/Header';

const TransferSuccess = () => {
    return (
        <>
            <Header />

            <div className='h-screen w-full flex justify-center items-center'>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-[5vmin] text-center'>
                        Transfer
                    </h1>

                    <div className='h-[300px] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[15px] min-w-[350px] min-h-[400px] flex flex-col justify-center items-center px-5 gap-[10%]'>
                        <div className='flex flex-col items-center justify-center gap-5'>
                            <FaCheckCircle className='text-[7vmin] text-[#2DC071]' />
                            <h1 className='text-[#2DC071] font-bold text-[4vmin]'>
                                Transfer Success
                            </h1>
                        </div>

                        <div className='w-full'>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Amount</span>
                                <span>1.000.000.000</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>
                                    Transaction Id
                                </span>
                                <span>338899318231301</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>From</span>
                                <span>1001</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>To</span>
                                <span>11234001000</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold'>Description</span>
                                <span>Bayar hutan dan beli Bakso</span>
                            </div>
                        </div>

                        <div className='flex w-full justify-around'>
                            <button className='border-[#23A6F0] text-[#23A6F0] border-[1px] rounded-[5px] w-[80px] py-1 hover:bg-[#23A6F0] hover:text-white duration-200'>
                                Print
                            </button>
                            <button className='border-[#23A6F0] text-[#23A6F0] border-[1px] rounded-[5px] w-[80px] py-1 hover:bg-[#23A6F0] hover:text-white duration-200'>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransferSuccess;
