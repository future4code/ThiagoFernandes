import { UserGateway } from '../gateways/UserGateway'

export class GetAllUsersUseCase {
    constructor(private userGateway: UserGateway) {}

    async execute(): Promise<GetAllUsersOutput> {
        const users = await this.userGateway.getUsers()
        return {
            //TODO retornar isso aqui, pensar em como fazer pq travei (?)
        }
    }
}

export interface GetAllUsersOutput {
    users: UsersOfGetAllUsersOutput[]
}

export interface UsersOfGetAllUsersOutput {
    id: string;
    name: string;
    age: string;
    email: string;
    photo: string;
    dateOfBirth: Date
} 