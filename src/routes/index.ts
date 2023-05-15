import { Router, Request, Response } from "express";
import team from './team';
import spent from './match';
import UserController from "../controllers/UserController";

const routes = Router();

routes.use("/team", team);
routes.use("/ter", spent);
routes.post("/login", UserController.login);

//aceita qualquer método HTTP ou URL
routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;
