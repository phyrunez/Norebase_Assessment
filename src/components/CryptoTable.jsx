import React, { useState, useEffect } from 'react';
import { HiArrowSmRight } from 'react-icons/hi'
import { HiArrowSmLeft } from 'react-icons/hi'
import { cryptoData } from '../services/data';

const CryptoTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;  
  const [displayCryptoData, setDisplayCryptoData] = useState([])

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = displayCryptoData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(displayCryptoData.length / rowsPerPage);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    cryptoData().then(result => setDisplayCryptoData(result))
    console.log(displayCryptoData)
  }, [])

  return (
    <div className="p-4 mt-28">
      <div className='shadow-black-opacity xl:block lg:block rounded-md md:block xl:max-w-[60%] lg:max-w-[60%] md:max-w-[100%] mx-auto hidden'>
      <table className="min-w-[100%] mx-auto md:min-w-[100%] bg-white  xl:min-w-full lg:min-w-full sm:table border-gray-200 ">
        <thead>
          <tr>
            <th className="py-4 px-4 text-left text-gray-600 font-semibold">💰 Coin</th>
            <th className="py-4 px-4 text-left text-gray-600 font-semibold">📑Code</th>
            <th className="py-4 px-4 text-left text-gray-600 font-semibold">🤮Price</th>
            <th className="py-4 px-4 text-left text-gray-600 font-semibold">📉 Total Supply</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id} className="odd:bg-gray-200">
              <td className="py-4 px-4 border-gray-200">{item.name}</td>
              <td className="py-4 px-4 border-gray-200">{item?.symbol}</td>
              <td className="py-4 px-4 border-gray-200">$ {item?.price_usd}</td>
              <td className="py-4 px-4 border-gray-200">{item?.tsupply}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between w-full lg:max-w-full md:max-w-full mx-auto items-center mt-4">
        <div>
            {currentPage > 1 ? <button
                onClick={prevPage}
              className='px-4 py-2 flex rounded'
            >
                <HiArrowSmLeft className='mt-1 mx-2' />
                Previous
            </button> : ''}
        </div>

        <div>
            {currentPage !== totalPages ? <button
                onClick={nextPage}
                className='px-4 py-2 flex rounded'
            >
                Next
                <HiArrowSmRight className='mt-1 mx-2' />
            </button>: ''}
        </div>
      </div>
      </div>

      <div className='shadow-black-opacity lg:hidden rounded-md md:hidden block'>
        <table className="min-w-full mx-auto bg-white border-gray-200">
            
            <thead>
                <tr>
                    {/* <th className="py-2 px-4 text-left flex flex-col text-gray-600 font-semibold">
                        💰 Coin
                        <span>{item.name}</span>
                    </th>
                    <th className="py-2 px-4 text-left text-gray-600 font-semibold">📑Code</th> */}
                    {/* <th className="py-2 px-4 text-left text-gray-600 font-semibold">🤮Price</th>
                    <th className="py-2 px-4 text-left text-gray-600 font-semibold">📉 Total Supply</th> */}
                    <th className="py-2 px-4 text-left bg-gray-200 text-gray-600 font-semibold"></th>
                    <th className="py-2 px-4 text-left bg-gray-200 text-gray-600 font-semibold"></th>
                </tr>
            </thead>
        
        <tbody>
        {currentData.map((item) => (
            <tr key={item.id} className="odd:bg-gray-200">
                <td className="py-2 px-4 border-gray-200 flex flex-col">
                    <p className='text-gray-600 font-semibold'>💰Coin</p>
                    <span>{item.name}</span>

                    <p className='text-gray-600 mt-4 font-semibold'>🤮Price</p>
                    <span>{item.price_usd}</span>
                </td>
            <td className="py-2 px-4 border-gray-200">
                <p className='text-gray-600 font-semibold'>📑Code</p>
                <span>{item?.symbol}</span>

                <p className='text-gray-600 mt-4 font-semibold'>📉Total Supply</p>
                <span>{item?.tsupply}</span>
            </td>
            {/* <td className="py-2 px-4 border-gray-200">$ {item?.price_usd}</td>
            <td className="py-2 px-4 border-gray-200">{item?.tsupply}</td> */}
            </tr>
        ))}
        </tbody>
        </table>

        <div className="flex justify-between w-full lg:max-w-full md:max-w-full mx-auto items-center mt-4">
        <div>
            {currentPage > 1 ? <button
                onClick={prevPage}
              className='px-4 py-2 flex rounded'
            >
                <HiArrowSmLeft className='mt-1 mx-2' />
                Previous
            </button> : ''}
        </div>

        <div>
            {currentPage !== totalPages ? <button
                onClick={nextPage}
                className='px-4 py-2 flex rounded'
            >
                Next
                <HiArrowSmRight className='mt-1 mx-2' />
            </button>: ''}
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default CryptoTable;
