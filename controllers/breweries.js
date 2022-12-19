import Brewery from "../models/Breweries.js";

export const getBreweries = async (req, res) => {
   try {
    const Brewery = await Brewery.find();
    res.json(Brewery);
   } catch (error) {
    res.status(500).json({error: error.message});
   }
};

export const getBrewery = async (req, res) => {
    try {
        const { id } = req.params
        const brewery = await Brewery.findById(id)

        if (brewery) {
            return res.json(brewery);
        }
        res.status(404).json({ message: "Brewery not found!" });
       } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message});
       }
};

export const createBrewery = async (req, res) => {
    const brewery = new Brewery(req.body);
    await brewery.save();
    res.status(201).json(brewery)
}

export const updateBrewery = async (req, res) => {
    const { id } = req.params;
    const brewery = await Brewery.findByIdAndUpdate(id, req.body);
    res.status(201).json(brewery)
}

export const destroyBrewery = async (req, res) => {
    try {
        const { id } = req.params;
        const destroyed = await Brewery.findByIdAndDelete(id);

        if (destroyed) {
            return res.status(200).send("Brewery Destroyed!")
        }

        throw new Error("Brewery not found")
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message })
    }
};