import { NextFunction, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interface/req-ext";

const authVerify = (req: RequestExt, res: Response, next: NextFunction) => {

    try {
        const token = req.get('token');
        console.log(token);
        const jwt = token?.split(" ").pop();
        const isUser = verifyToken(`${jwt}`) as { id: string };

        if (!isUser) {
            res.status(401);
            res.send("Invalid token");
        } else {
            req.user = isUser;
            next();
        }
    }
    catch (err) {
        console.error({ err });
        res.status(400);
        res.send("Invalid session");
    }

}

export { authVerify }

