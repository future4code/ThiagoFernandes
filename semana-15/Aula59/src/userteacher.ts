import { User } from './user';


export class Teacher implements User {

    userName: string = this.teacherName;
    userEmail: string =  this.teacherEmail;
    userBirthDate: string = this.teacherBirthDate;

    constructor(
        public teacherName: string,
        public teacherEmail: string,
        public teacherBirthDate: string,
        public teacherSpecialty: string
    ){}

}
