import { User } from './../entities/User'
import { UserGateway } from './../gateways/UserGateway'
import { CryptographyGateway } from './../gateways/crypt/CryptoGateway'
import { IdGeneratorGateway } from './../gateways/auth/IdGeneratorGateway'
import { UserTokenGateway } from './../gateways/auth/UserTokenGateway'

export class CreateUser {

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
            input.username,
            input.email,
            encryptedPassword,
        )

        try {
            await this.userGateway.createUser(user)
        } catch (err) {
            console.log(err)
            throw new Error("Falha ao criar usuário!")
        }

        return {
            token: this.userTokenGateway.generateToken(user.getId()),
            message: "Usuário criado com sucesso!"
        }

    }
}

export interface CreateUserUseCaseInput {

    username: string,
    email: string,
    password: string

}

export interface CreateUserUseCaseOutput {

    token: string,
    message: string

} 