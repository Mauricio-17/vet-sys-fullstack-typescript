import { Router } from "express";
import { 
    createPet,
    deletePet,
    getOnePet,
    getPets,
    updatePet
} from "../controllers/mascot";
//import { authVerify } from "../middlewares/authentication";


const router = Router();

router.get("/:id", getOnePet);

router.get("/", getPets);

router.post("/", createPet);

router.put("/:id", updatePet);

router.delete("/:id", deletePet);

export default router;
