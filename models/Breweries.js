import mongoose from "mongoose"

const Schema = mongoose.Schema

let Brewerey = new Schema({
    "name": String,
    "brewery_type": String,
    "street": String,
    "city": String,
    "state": String,
})

export default mongoose.model("breweries", Brewerey)