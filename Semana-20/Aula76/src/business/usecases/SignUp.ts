import { UserGateway } from '../gateways/UserGateway'
import { CryptographyGateway } from '../gateways/crypt/CryptoGateway'
import { IdGeneratorGateway } from '../gateways/auth/IdGeneratorGateway'
import { AuthGateway } from "../gateways/AuthGateway";
import { User } from "../entities/User";

export class Signup {
    constructor(
        private database: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private id: IdGeneratorGateway,
        private auth: AuthGateway
    ) { 

    }

    async execute(input: UserSignupInput): Promise<string> {
        const id = this.id.generateId();
        const encryptedPassword = await this.cryptographyGateway.encrypt (
            input.password
        );
        const user = new User(id, input.name, encryptedPassword, input.email, input.photoUrl, input.birthdate);

        await this.database.createUser(user);
        const token = this.auth.sign(user.getId(), user.getEmail());

        return token;
    }

}

export interface UserSignupInput {
    email: string,
    password: string,
    name: string,
    photoUrl: string,
    birthdate: Date
}  