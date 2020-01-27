import { CreateUser } from './../business/usecases/CreateUser'
import { UsersDatabase } from './../data/UsersDatabase'
import { Login } from './../business/usecases/Login'
import { UserGateway } from './../business/gateways/UserGateway'
import express, {Request, Response} from 'express'
import { V4IdGenerator } from '../services/auth/v4IdGenerator'
import { JwtAuthService } from './../services/auth/jwtAuthService'
import { BcryptService } from '../services/cryptography/bcryptService'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/signup", async (req: Request, res: Response) => {

    try {
        const createUserUC = new CreateUser(
            new UsersDatabase(),
            new BcryptService(),
            new V4IdGenerator(),
            new JwtAuthService()
        )
        const result = await createUserUC.execute({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            erroMessage: err.message
        })
    }

})

app.post("/login", async (req: Request, res: Response) => {

    try {

        const loginUseCase = new Login (
            new UsersDatabase(),
            new BcryptService(),
            new JwtAuthService()
        )

        const result = await loginUseCase.execute({
            email: req.body.email,
            password: req.body.password
        })

        res.send(result)

    } catch(err) {
        res.status(400).send({
            erroMessage: err.message
        })
    }

})


export default app