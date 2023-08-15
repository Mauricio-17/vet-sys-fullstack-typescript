import { Response } from "express";

const handleHttp = (res: Response, error: Error, errorMessage: string) => {

  console.log(`ERROR: ${errorMessage}`);


  let statusCode = 400;
  if (errorMessage.includes("FOUND"))
    statusCode = 404;

  else if (errorMessage.includes("EXISTS"))
    statusCode = 406;

  res.send({ errorMessage }).status(statusCode);
};

export { handleHttp };
