namespace Subjects {
  export interface Teacher {
    exprienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    };
    getAvailaleTeacher(): string {
      if (this.teacherexperienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
        return 'No available teacher';
    };
  }
}
