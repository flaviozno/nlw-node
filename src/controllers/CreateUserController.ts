import { Request, Response } from "express"
import { CreateUserService } from '../service/CreateUserService'


class CreateUserController{

    async handle(req: Request, resp: Response){
        const { name, email, admin } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, admin});

        return resp.json(user)
    }
}

export { CreateUserController }