import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string) => await hash(pass, 8);

const verify = async (pass: string, hashedPass: string) => await compare(pass, hashedPass);

export { encrypt, verify };