const API_URL = process.env.REACT_APP_BACKEND_URL;
const serverIP1 = process.env.REACT_APP_SERVER_IP_1;
const serverIP2 = process.env.REACT_APP_SERVER_IP_2;
const serverIP3 = process.env.REACT_APP_SERVER_IP_3;



fetch(`${API_URL}/api/data`) // Example API call
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));
// api.js
export const fetchData = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw error for proper error handling
  }
};
const serverIPs = [
  '35.160.120.126',
  '44.233.151.27',
  '34.211.200.85'
];

// Example of using one of the IP addresses for making API calls
const axios = require('axios');
axios.get(`http://${serverIPs[0]}/api/data`)
  .then(response => console.log(response.data))
  .catch(error => console.log(error));
