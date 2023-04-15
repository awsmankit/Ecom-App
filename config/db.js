import mongoose from "mongoose";
import colors from "colors";

// This is a function that connects to the MongoDB database using the Mongoose library.
const connectDB = async () => {
  try {
    // This line of code connects to the database using the URL specified in the environment variable MONGO_URL.
    const conn = await mongoose.connect(process.env.MONGO_URL);

    // If the connection is successful, this line of code logs a message to the console indicating the host name of the connected database.
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    // If there's an error connecting to the database, this line of code logs a message to the console with the error information.
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

// This line of code exports the connectDB function so that it can be used in other parts of the code.
export default connectDB;
