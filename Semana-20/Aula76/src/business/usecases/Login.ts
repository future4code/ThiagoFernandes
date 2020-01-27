import { UserGateway } from './../gateways/UserGateway'
import { CryptographyGateway } from './../gateways/crypt/CryptoGateway'
import { UserTokenGateway } from './../gateways/auth/UserTokenGateway'

export class Login {

    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private userTokenGateway: UserTokenGateway
    ) {}

    async execute(input: LoginInput): Promise<LoginOutput> {

        const user = await this.userGateway.getUserByPassword(input.password)
        const verifyPassword = await this.cryptographyGateway.compare(input.password, user.getPassword())

        if(!verifyPassword){
            throw new Error("Email ou senha inválidos!")
        }

        return {
            token: this.userTokenGateway.generateToken(user.getId())
        }
    }
}

export interface LoginInput {
    email: string,
    password: string
}

export interface LoginOutput {
    token: string
} 