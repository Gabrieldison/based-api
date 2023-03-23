import { Router } from "express";
import multer from "multer";
import { CreateUSerController } from "../../../../modules/accounts/useCases/createUsers/CreateUSerController";
import { UpdateUserAvatarController } from "../../../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import uploadConfig from "../../../../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ProfileUserController } from "../../../../modules/accounts/useCases/profileUser/ProfileUserController";

const userRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUSerController = new CreateUSerController();
const updateUserAvatarController = new UpdateUserAvatarController();
const profileUserController = new ProfileUserController();

userRoutes.post("/", createUSerController.handle);
userRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

userRoutes.get("/profile", ensureAuthenticated, profileUserController.handle);

export { userRoutes };
