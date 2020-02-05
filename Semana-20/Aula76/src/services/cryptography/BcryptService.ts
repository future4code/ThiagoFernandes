import { CryptographyGateway } from './../../business/gateways/crypt/CryptoGateway'
import * as bcrypt from "bcrypt"

export class BcryptService implements CryptographyGateway {

    private static BCRYPT_SALT_ROUNDS: 10

    async encrypt(word: string): Promise<string> {

        const salt = await bcrypt.genSalt(BcryptService.BCRYPT_SALT_ROUNDS);
        const encryptWord = await bcrypt.hash(
            word,
            salt
        )
        return encryptWord;
    }

    compare(word: string, hash: string): Promise<boolean> {

        return bcrypt.compare(word, hash)
        
    }
} 