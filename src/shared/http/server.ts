import AppError from "./errors/AppError"; 
import express, { NextFunction, Request, Response } from "express";
import './conn/connPg'
import routes from "./routes";

const app = express();
const port = 5151

app.use(express.json());
app.use(routes)

app.use((error: Error, req:Request , res:Response , next:NextFunction ) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

app.listen(port, ()=>{
  console.log('porta aberta')
})