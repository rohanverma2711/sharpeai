import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase' // Import the Firestore instance
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader'



const Data = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactionsRef = collection(db, 'transactions');
        const snapshot = await getDocs(transactionsRef);
        const data = snapshot.docs.map(doc => doc.data());
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  return (
    <div>

<div className=" hidden sm:block w-4/5 my-4 py-4 rounded-xlg border-1  shadow-navShadow mx-auto mb-10">
        <div className="flex flex-row justify-between mx-20">
          <div className="bg-navButton bg-opacity-40 p-1 rounded-md w-40 h-10">
            <img src="https://framerusercontent.com/images/N3k1tIRG4uhESUSkdVeg8QbCjg.png" />
          </div>
          <div className="flex flex-row pt-2">
          <a
              onClick={() => navigate("/")}
              className="mx-4 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => navigate("/transaction")}
              className="mx-4 cursor-pointer"
            >
              Transaction
            </a>
            <a
              onClick={() => navigate("/data")}
              className="mx-4 cursor-pointer"
            >
              Data
            </a>
          </div>
        </div>
      </div>
      
      {loading ? (
         <Loader className = "text-center border-2 border-black"/>
      ) : (
        <div
        class="relative  m-10 flex flex-col  h-full  text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table class="w-full text-left table-auto min-w-max">
          <thead>
      <tr>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Address
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Amount
          </p>
        </th>
        
      </tr>
    </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                 <tr >
                 <td class="p-4 border-b border-blue-gray-50">
                   <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                     {transaction.address}
                   </p>
                 </td>
                 <td class="p-4 border-b border-blue-gray-50">
                   <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                     {transaction.amount}
                   </p>
                 </td>
                 
               </tr>
              ))}
            </tbody>
          </table>


  
        </div>
      )}
    </div>
  );
};

export default Data;
