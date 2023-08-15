import { Router } from "express";
import { 
    createClient,
    deleteClient,
    getClients,
    getOneClient,
    updateClient
} from "../controllers/client";
//import { authVerify } from "../middlewares/authentication";

const router = Router();

router.get("/", getClients);
router.get("/:id", getOneClient);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;
