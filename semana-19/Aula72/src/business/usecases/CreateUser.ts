import { User } from './../entities/User'
import { UserGateway } from './../gateways/UserGateway'
import { CryptographyGateway } from './../gateways/crypt/CryptoGateway'
import { IdGeneratorGateway } from './../gateways/auth/IdGeneratorGateway'
import { UserTokenGateway } from './../gateways/auth/UserTokenGateway'

export class CreateUserUseCase{

    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private idGeneratorGateway: IdGeneratorGateway,
        private userTokenGateway: UserTokenGateway
    ) {}

    async execute(input: CreateUserUseCaseInput): Promise <CreateUserUseCaseOutput> {

        const encryptedPassword = await this.cryptographyGateway.encrypt (
            input.password
        );

        const user = new User (
            this.idGeneratorGateway.generateId(),
            input.name,
            input.email,
            encryptedPassword,
        )

        try {
            await this.userGateway.createUser(user)
        } catch (err) {
            console.log(err)
            throw new Error("Ops, deu ruim!")
        }

        return {
            token: this.userTokenGateway.generateToken(user.getId()),
            message: "Usuário criado!"
        }
        
    }
}

export interface CreateUserUseCaseInput {

    name: string,
    email: string,
    password: string

}

export interface CreateUserUseCaseOutput {

    token: string,
    message: string

} 