import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const AlunoRouter = Router();

AlunoRouter.get('/alunos', AlunoController.listAluno)

AlunoRouter.post('/alunos', AlunoController.createAluno);

AlunoRouter.put('/alunos', AlunoController.updateAluno);

AlunoRouter.delete('/alunos', AlunoController.deleteAluno);

export default AlunoRouter;