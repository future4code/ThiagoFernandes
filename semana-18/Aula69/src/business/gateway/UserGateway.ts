import { User } from './../entities/User';

export interface UserGateway {
    updatePassword(id: string, newPassword: string): Promise<void>
    insertUser(user: User): Promise<void>
    getUserEmail(email: string): Promise<User>
    getuserId(id: string): Promise<User>
}