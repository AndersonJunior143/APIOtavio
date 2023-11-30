import { Router } from "express";
import MainController from "../controllers/MainController";

const MainRouter = Router();

MainRouter.get('/home', MainController.renderMainPage);

export default MainRouter;