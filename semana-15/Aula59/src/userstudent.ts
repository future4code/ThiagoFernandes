import { User } from './user';


export class Student implements User {

    userName: string = this.studentName;
    userEmail: string =  this.studentEmail;
    userBirthDate: string = this.studentBirthDate;

    constructor(
        public studentName: string,
        public studentEmail: string,
        public studentBirthDate: string,
        public studentMission: string
    ){}

}
