import { User } from './../business/entities/User'
import { UserGateway } from './../business/gateway/UserGateway'
import knex from 'knex'

export class UserDatabase implements UserGateway{

    private connection: knex;

    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: "",
                user: "",
                password: "",
                database: ""
            }
        });
    }

    async addUser(user: User) {
        try {
            await this.connection("nomeDaTabela").insert(
                {
                    id: user.getId(),
                    email: user.getEmail(),
                    userPassword: user.getPassword()
                }
            );
        } catch (err) {
           throw new Error("Falha ao cadastrar novo usuário :(")
        }
    }

    async getUserEmail(email: string): Promise<User> {
        const result = await this.connection.raw(`
            SELECT * FROM nomeDaTabela WHERE email = "${email}"
        `);
        const user = result[0][0];
        return new User(user.id, user.email, user.Password)
    }

    async getUserId(id: string): Promise<User> {
        const result = await this.connection.raw(`
            SELECT * FROM nomeDaTabela WHERE id = "${id}"
        `);
        const user = result[0][0];
        return new User(user.id, user.email, user.Password)
    }

    //TODO falta o updatepassword








}