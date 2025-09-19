/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  student = [
    { id: 1, name: 'Hulk Hogan', age: 100 },
    { id: 2, name: 'Jhon Cena', age: 50 },
    { id: 3, name: 'HBK', age: 40 },
  ];

  //   Method to fetch all students
  getStudents() {
    return this.student;
  }

  //   Method to fetch a student by ID
  getStudentById(id: number) {
    const result = this.student.find((student) => student.id === id);

    if (!result) {
      return { message: 'Student not found' };
    } else return result;
  }

  //   Method to add a new student
  addStudent(newStudent: { id: number; name: string; age: number }) {
    // Check if student with the same ID already exists
    if (this.student.find((student) => student.id === newStudent.id)) {
      return { message: 'Student with this ID already exists' };
    }

    this.student.push(newStudent);
    return { message: 'Student added successfully' };
  }

  //   Method to edit a student
  editStudent(newDetails: { id: number; name: string; age: number }) {
    if (!this.student.find((s) => s.id === newDetails.id)) {
      return { message: 'Student not found' };
    } else {
      this.student[this.student.findIndex((s) => s.id === newDetails.id)] =
        newDetails;
      return { message: 'Student details updated successfully' };
    }
  }
}
