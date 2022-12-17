import fetch from 'node-fetch'
import { promises as fsPromises } from 'fs'

fetch('https://api.openbrewerydb.org/breweries')
.then(response => response.json())
.then(data => {
    fsPromises.writeFile("./breweries.json", JSON.stringify(data))
})
.catch(error=> console.error(error))
