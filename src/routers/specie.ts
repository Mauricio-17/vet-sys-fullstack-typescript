import { Router } from "express";
import { 
    createSpecie,
    deleteSpecie,
    getOneSpecie,
    getSpecies,
    updateSpecie
} from "../controllers/specie";
//import { authVerify } from "../middlewares/authentication";

const router = Router();

router.get("/:id", getOneSpecie);

router.get("/", getSpecies);

router.post("/", createSpecie);

router.put("/:id", updateSpecie);

router.delete("/:id", deleteSpecie);

export default router;
