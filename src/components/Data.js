import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';


const Data = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState();


  const filterPosts = (allPosts) => {
    // Filter posts with user ID 1
    const filtered = allPosts.filter((post) => post.userId === 1);
    setFilteredPosts(filtered);
  };


  useEffect(() => {
    // Fetch data from the API
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        filterPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        // Hide loader when data fetching is complete (success or failure)
        setLoading(false);
      });
      
    
  }, []);

console.log(posts,filteredPosts)
  

  const dataForPieChart = [
    { name: 'User ID 1 Posts', value: filteredPosts.length },
    { name: 'Other Posts', value: posts.length - filteredPosts.length },
  ];

  return (
<>
   
    <div className='mb-10'>
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
      {loading && <Loader className = "text-center border-2 border-black"/>}
      {!loading && (
        <div>

      
        <h1 className='font-monste font-bold  text-4xl text-center mb-10'>Posts Visualization</h1>
  
        {/* Table */}
        <div className='w-full overflow-x-auto'>
        <table className='w-full text-lg  text-gray-500 m-10'>
          <thead className='text-lg text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
  
        {/* Pie Chart */}
        <h1 className='font-monste font-bold  text-4xl text-center my-18'>Pie Chart</h1>
        <div className='flex  justify-center'>
        
  
        
        <div className='h-80 w-80'>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={dataForPieChart}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {dataForPieChart.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`#${index === 0 ? 'FF6384' : '36A2EB'}`} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          </div>
          </div>
          </div>
      )}
      
    </div>
    </>
  );
};

export default Data;
