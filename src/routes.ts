import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCases/AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCases/CreateUser/CreateUserController";
import { RefreshTokenUserController } from "./useCases/RefreshTokenUser/RefreshTokenUserUseCase";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenUserController();


router.post("/createuser", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenController.handle)


//Rota para testar autenticacao
router.get("/courses", ensureAuthenticated ,(request, response) =>{
    return response.json([
        {name: "teste"},
        {name: "teste"},
        {name: "teste"}
    ])
})


export { router }