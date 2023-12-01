import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const Data = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        filterPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filterPosts = (allPosts) => {
    // Filter posts with user ID 1
    const filtered = allPosts.filter((post) => post.userId === 1);
    setFilteredPosts(filtered);
  };

  const dataForPieChart = [
    { name: 'User ID 1 Posts', value: filteredPosts.length },
    { name: 'Other Posts', value: posts.length - filteredPosts.length },
  ];

  return (
    <div>
      <h1>Posts Visualization</h1>

      {/* Table */}
      <table>
        <thead>
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

      {/* Pie Chart */}
      <div style={{ width: '300px', height: '300px', margin: '20px' }}>
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
  );
};

export default Data;
