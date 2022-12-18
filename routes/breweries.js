import { Router } from "express"
import * as controllers from "../controllers/breweries.js"

const router = Router();

router.get("/", controllers.getBreweries)
router.get("/:id", controllers.getBrewery)
router.post("/", controllers.createBrewery)
router.put("/:id", controllers.updateBrewery)
router.delete("/:id", controllers.destroyBrewery)

export default router;