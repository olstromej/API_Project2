import mongoose, { connect } from 'mongoose'
import connection from "./connection.js"
import data from './breweries.json' assert { type: 'json' }
import Breweries from "../models/Breweries.js"
import chalk from "chalk"



let breweryData = data.map(item => {
   const brewery = {}
   brewery.name = item.name
   brewery.brewery_type = item.brewery_type
   brewery.street = item.street
   brewery.city = item.city
   brewery.state = item.state
   return brewery
})




Breweries
.deleteMany({})
.then(() => Breweries.create(breweryData))
.then(() => console.log(chalk.bgBlue.bold("Done! Breweries Created!")))
.then(() => mongoose.disconnect())
.catch(error => console.log(chalk.red("Error, somethings wrong!", error)))



// const insertData = async () => {
//     await connection.dropDatabase();
  
//     await Breweries.create(data);
  
//     await connection.close();
//   };
  
//   insertData();