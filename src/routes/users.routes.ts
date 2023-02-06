import { Router } from "express";
import multer from "multer";
import { CreateUSerController } from "../modules/accounts/useCases/createUsers/CreateUSerController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const userRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUSerController = new CreateUSerController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRoutes.post("/", createUSerController.handle);
userRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { userRoutes };
