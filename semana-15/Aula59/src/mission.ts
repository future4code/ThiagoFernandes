import { Teacher } from './userteacher';
import { Student } from './userstudent';

export abstract class Mission {
    constructor(
        public startDate: string,
        public endDate: string,
        public students: Student[] = [],
        public teachers: Teacher[] = []
        ) {}
  }