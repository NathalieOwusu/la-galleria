import axios from 'axios';

// List of server IPs (as fallback options if needed)
const serverIPs = [
  '35.160.120.126',
  '44.233.151.27',
  '34.211.200.85'
];

// Define API_URL using serverIPs[0] as fallback, or local server if both fail
const API_URL = process.env.REACT_APP_BACKEND_URL || (serverIPs[0] ? `https://${serverIPs[0]}` : 'http://localhost:3000');

// Function to fetch data from the API
export const fetchData = async () => {
  try {
    // Make GET request using axios
    const response = await axios.get(`${API_URL}/api/data`);
    return response.data;  
  } catch (error) {
    console.error("Error fetching data:", error); 
    throw error; 
  }
};
