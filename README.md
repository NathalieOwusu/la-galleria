# la-galleria
La Galleria - Project Setup
A brief description of the project.

Table of Contents
Prerequisites
Installation
Running Locally
API
Troubleshooting
Prerequisites
Before you can run the project, make sure you have the following installed:

Node.js (Version >= 14.x)
npm or Yarn
MongoDB (for backend) or use a cloud-based MongoDB like MongoDB Atlas
Optional
Netlify CLI if you want to test Netlify Functions locally
Installation

1. Clone the repository
git clone https://github.com/NathalieOwusu/la-galleria.git
cd la-galleria

2. Install the dependencies
You'll need to install dependencies for both the frontend and backend:

Frontend (Client) dependencies:
cd client
npm install

Backend (Server) dependencies:
cd ../server
npm install

Running Locally
1. Start the MongoDB Database (if using local MongoDB)
If you have MongoDB installed locally, run:
mongod


2. Start the Backend Server
In the backend (server) directory, run:
npm start
This will start the backend server, which should be running on http://localhost:8888.

If you’re using nodemon (recommended for development):
nodemon server/server.js

3. Start the Frontend Development Server
In the frontend (client) directory, run:
npm start
This will start the frontend server, which should be running on http://localhost:8080.

4. Accessing the App
Once both servers are running, you can access the app in your browser at:
http://localhost:8080

5. Make sure the Proxy is working
The frontend (running on localhost:8080) should be able to send API requests to the backend (running on localhost:8888). Ensure the API proxy in the Webpack config (or frontend fetch requests) is set up correctly.

API
Available API Routes:
POST /api/auth/signup
Sign up a new user.

POST /api/auth/login
Log in an existing user.

GET /api/artworks
Fetch all artwork records.

Troubleshooting
If you run into any issues while setting up or running the project, check the following:
MongoDB Connection Issues

API Calls Not Working:

Ensure the frontend is correctly sending requests to the backend API.
Verify that the proxy setup in Webpack works if your frontend is on a different port (e.g., 8080).
Port Conflicts:

If localhost:8080 or localhost:8888 is already in use, change the port in the respective files (webpack config or server.js).
Missing Dependencies:

If you see errors like Module not found, make sure you’ve run npm install in both the client and server directories.
