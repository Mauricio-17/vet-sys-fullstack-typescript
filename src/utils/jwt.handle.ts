import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

const generateToken = (id: string) =>
    sign({ data: id }, JWT_SECRET, {
        expiresIn: '2h'
    });

const verifyToken = (jwt: string) =>
    verify(jwt, JWT_SECRET);

export { generateToken, verifyToken };
