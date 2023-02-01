import { CreateSpecificationController } from "../modules/cars/useCases/createSpecifications/CreateSpecificationsController";
import { Router } from "express";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
