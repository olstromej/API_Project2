import mongoose from "mongoose";
import chalk from "chalk"

mongoose.set("returnOriginal", false);

mongoose.set('strictQuery', true)

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Brewery_db'

mongoose.connect(url).catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
    console.log(chalk.underline.blue("Disconnected from MongoDB!"));
  });

  mongoose.connection.on("error", (err) => {
    console.log(chalk.red(`MongoDB connection error: ${err}`));
  });


export default mongoose.connection;