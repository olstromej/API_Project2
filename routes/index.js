import { Router } from "express";
import breweryRoutes from './breweries.js'

const router = Router();

router.get("/", (req, res) => {
    res.send("This is the api root for breweries")
});

router.use("/breweries", breweryRoutes)

export default router;

