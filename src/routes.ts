import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureRequestCheckInfo } from "./middlewares/ensureRequestInfos";
import { AuthenticateUserController } from "./useCases/AuthenticateUser/AuthenticateUserController";
import { CreatePostController } from "./useCases/CreatePost/CreatePostController";
import { CreateUserController } from "./useCases/CreateUser/CreateUserController";
import { RefreshTokenUserController } from "./useCases/RefreshTokenUser/RefreshTokenUserUseCase";

const router = Router();

//Controllers
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenUserController();
const createPostController = new CreatePostController();

//Rotas
router.post("/createuser", ensureRequestCheckInfo, createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenController.handle);
router.post("/create-post", ensureAuthenticated, ensureRequestCheckInfo, createPostController.handle);

export { router }