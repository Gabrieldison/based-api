import { Router } from "express";

import { CreateCarController } from "../../../../modules/cars/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ListAvailableCarsController } from "../../../../modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { CreateCarsSpecificationController } from "../../../../modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { UploadCarImageController } from "../../../../modules/cars/useCases/uploadCarImages/UploadCarImageController";
import multer from "multer";
import uploadConfig from "../../../../config/upload";

const carRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarspecificationController =
  new CreateCarsSpecificationController();
const uploadCarImagesController = new UploadCarImageController();

const upload = multer(uploadConfig.upload("./tmp/cars"));

carRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carRoutes.get("/available", listAvailableCarsController.handle);

carRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  createCarspecificationController.handle
);

carRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarImagesController.handle
);

export { carRoutes };
