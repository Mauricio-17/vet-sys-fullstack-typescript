import { Router } from "express";
import { 
    createUser,
    deleteUser,
    getOneUser,
    updateUser
 } from "../controllers/user";
//import { authVerify } from "../middlewares/authentication";


const router = Router();

router.get("/:id", getOneUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;