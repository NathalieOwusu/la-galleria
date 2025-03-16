import axios from 'axios';

// List of server IPs (as fallback options if needed)
const serverIPs = [
  process.env.REACT_APP_SERVER_IP_1,
  process.env.REACT_APP_SERVER_IP_2,
  process.env.REACT_APP_SERVER_IP_3
];


// using the environment variable or fallback options
const API_URL = process.env.REACT_APP_BACKEND_URL || (serverIPs[0] ? `https://${serverIPs[0]}` : 'http://localhost:8888');

// Function to fetch data from the API
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/data`);
    return response.data;  
  } catch (error) {
    console.error("Error fetching data:", error); 
    throw error; 
  }
};

// Function to login using POST request
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {  
      username,
      password,
    });

    return response.data;  
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; 
  }
};

