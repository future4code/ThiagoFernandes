import { User } from './../business/entities/User'
import { UserGateway } from './../business/gateways/UserGateway'
import knex from 'knex'

export class UsersDatabase implements UserGateway {

    private connection = knex({
        client: 'mysql',
        connection: {
            host: 'ec2-52-90-192-153.compute-1.amazonaws.com',
            user: 'thiago',
            password: process.env.SENHA_DO_BANCO,
            database: 'astromatch'
        }
    })

    public async getUserById(id: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM user_astromatch WHERE id='${id}'`
        )

        const returnedUser = query[0][0]
        if (!returnedUser) {
            throw new Error("Usuário não encontrado!");
        }

        return new User(
            returnedUser.id,
            returnedUser.username,
            returnedUser.email,
            returnedUser.password
        )

    }

    public async getUserByEmail(email: string): Promise<User> {

        const query = await this.connection.raw(
            `SELECT * FROM user_astromatch WHERE email='${email}'`
        );

        const returnedUser = query[0][0]
        if(!returnedUser) {
            throw new Error("Usuário não encontrado :(")
        }

        return new User(
            returnedUser.id,
            returnedUser.name,
            returnedUser.email,
            returnedUser.password
        )

    }

    public async getAllUsers(): Promise<User[]> {

        const query = this.connection.raw("SELECT * FROM user_astromatch")
        const usersFromDb = await query
        return usersFromDb[0].map(
            (user: any) =>
                new User(user.id, user.name, user.email, user.password)
        )

    }

    public async createUser(user: User): Promise<void> {

        await this.connection
        .insert({
            id: user.getId(),
            name: user.getUserName(),
            email: user.getUserEmail(),
            password: user.getPassword()
        })
        .into("user_astromatch")

    }

    async verifyUserExist(id: string): Promise<boolean> {

        const query = await this.connection.raw(
            `SELECT * FROM user_astromatch WHERE id='${id}'`
        );
        
        const returnedUser = query[0][0]

        return Boolean(returnedUser)

    }

} 