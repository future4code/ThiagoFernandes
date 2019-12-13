import { Teacher } from './userteacher';
import { Student } from './userstudent';
import { Mission } from './mission';

export class MobileMission extends Mission {
    public webStartDate: string = this.startDate
    public webEndDate: string = this.endDate
    public webStudents: Student[] = this.students
    public webReachers: Teacher[] = this.teachers

    constructor(
        public startDate: string,
        public endDate: string,
        public students: Student[],
        public teachers: Teacher[],
        public classNumber: number

    ){super(startDate, endDate, students, teachers)}

}