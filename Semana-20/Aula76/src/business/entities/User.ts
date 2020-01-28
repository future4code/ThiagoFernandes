export class User {
    constructor(
        private id: string,
        private name: string,
        private password: string,
        private email: string,
        private photo: string,
        private birthdate: Date,
    ) { }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getPassword() {
        return this.password;
    }

    public getEmail() {
        return this.email;
    }

    public getPhoto() {
        return this.photo;
    }

    public getbBirthdate() {
        return this.birthdate;
    }
    
}