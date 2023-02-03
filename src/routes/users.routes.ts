import { Router } from "express";
import { CreateUSerController } from "../modules/accounts/useCases/createUsers/CreateUSerController";

const userRoutes = Router();

const createUSerController = new CreateUSerController();

userRoutes.post("/", createUSerController.handle);

export { userRoutes };
