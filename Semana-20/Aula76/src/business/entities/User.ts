export class User {

    constructor(
        private id: string,
        private username: string,
        private email: string,
        private password: string
    ){}

    public getId(): string{
        return this.id
    }

    public getUserName(): string {
        return this.username
    }

    public getUserEmail(): string{
        return this.email
    }

    public getPassword() {
        return this.password
    }
    
} 