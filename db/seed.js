import mongoose from 'mongoose'
import connection from './connection.js'
import data from './breweries.json' assert { type: 'json' }
import breweries from '../models/Breweries.js'
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

 

breweries
    .deleteMany({})
    .then(() =>breweries.create(breweryData))
  .then(() => console.log(chalk.bgBlue.bold("Done! Breweries Created!")))
  .then(() => mongoose.disconnect())
  .catch(error => console.log(chalk.red("Error, somethings wrong!", error)))