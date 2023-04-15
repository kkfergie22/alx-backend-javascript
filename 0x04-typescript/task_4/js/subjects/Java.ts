namespace Subjects{
  export interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingJava?: number;
  }

  export class Java extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
    }
  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingJava > 0) {
    return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
    }
  }

}

