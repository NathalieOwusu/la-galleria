// //import Mongoose
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = 'mongodb+srv://daisha:lagalleria@cluster61478.qdaebge.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster61478';

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// // const client = new MongoClient(uri, {
// //   serverApi: {
// //     version: ServerApiVersion.v1,
// //     strict: true,
// //     deprecationErrors: true,
// //   },
// // });

// // async function connectDB() {
// //   try {
// //     await client.connect();
// //     console.log("Connected to MongoDB successfully!");
// //   } catch (err) {
// //     console.error("Error connecting to MongoDB:", err);
// //     process.exit(1);
// //   }
// // }

// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => {
// //     console.log('Connected to MongoDB');
// //     // Load initial plants after database connection
// //     PlantController.loadInitialPlants({}, {}, (err) => {
// //       if (err) console.error(err);
// //     });
// //   })
// //   .catch((err) => console.error('MongoDB connection error:', err));

// module.exports = { client, connectDB };