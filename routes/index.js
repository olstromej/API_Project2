import { Router } from "express";
import breweryRoutes from './breweries.js'

const router = Router();

router.get("/", (req, res) => {
    res.send("THIS IS THE ROOT API FOR BREWERIES")
});

router.use("/breweries", breweryRoutes)

export default router;

