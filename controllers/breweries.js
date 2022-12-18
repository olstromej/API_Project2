import Breweries from "../models/Breweries.js";

export const getBreweries = async (req, res) => {
   try {
    const Brewery = await Breweries.find();
   } catch (error) {
    res.status(500).json({error: error.message});
   }
};

export const getBrewery = async (req, res) => {
    try {
        const { id } = req.params
        const brewery = await Breweries.findById(id)

        if (brewery) {
            return res.json(brewery);
        }
        res.status(404).json({ message: "Brewery not found!" });
       } catch (error) {
        res.status(500).json({error: error.message});
       }
};

export const createBrewery = async (req, res) => {
    try {
        const brewery = new Brewery(req.body);
        await brewery.save();
        res.status(201).json(brewery)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message});
    }
};

export const updateBrewery = async (req, res) => {
    try {
        const { id } = req.params;
        const brewery = await Breweries.findByIdAndUpdate(id, req.body)
        res.status(201).json(brewery)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
};

export const destroyBrewery = async (req, res) => {
    try {
        const { id } = req.params;
        const destroyed = await Breweries.findByIdAndDelete(id);

        if (destroyed) {
            return res.status(200).send("Brewery Destroyed!")
        }

        throw new Error("Brewery not found")
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message })
    }
};