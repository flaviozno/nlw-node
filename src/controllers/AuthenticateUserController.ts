import { Request, Response } from "express"
import { AuthenticateUserService } from "../service/AuthenticateUserService"

class AuthenticateUserController{

    async handle(req: Request, resp: Response){
        const { email, password } = req.body

        const authenticateUserService = new AuthenticateUserService()

        const token = await authenticateUserService.execute({
            email,
            password
        })

        return resp.json(token)
    }
}

export { AuthenticateUserController }