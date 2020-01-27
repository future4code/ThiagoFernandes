import { User } from './../entities/User'

export interface UserGateway {

    getUserById(id: string): Promise <User>
    getUserByEmail(email: string): Promise <User>
    getAllUsers(): Promise <User[]>
    createUser(user: User): Promise <void>

} 