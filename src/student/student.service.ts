/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  student = [
    { id: 1, name: 'Hulk Hogan', age: 100 },
    { id: 2, name: 'Jhon Cena', age: 50 },
    { id: 3, name: 'HBK', age: 40 },
  ];

  // GET
  getStudents() {
    return this.student;
  }

  // GET by ID
  getStudentById(id: number) {
    const result = this.student.find((student) => student.id === id);

    if (!result) {
      throw new NotFoundException('Student not found');
    } else return result;
  }

  // POST
  addStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.student.push(newStudent);
    return { message: 'Student added successfully' };
  }

  // PUT
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.student.findIndex((s) => s.id === id);

    // Check if student with the given ID exists
    if (!this.student.find((s) => s.id === id)) {
      throw new NotFoundException('Student not found');
    }

    this.student[index] = { id, ...data };
    return this.student[index];
  }

  // PATCH
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }

  // DELETE
  deleteStudent(id: number) {
    // Check if student with the given ID exists
    if (!this.student.find((s) => s.id == id)) {
      return { message: 'Student not found' };
    }

    const deletedStudents = this.student.splice(
      this.student.findIndex((s) => s.id === id),
      1,
    );
    return {
      message: 'Student deleted successfully',
      student: deletedStudents[0],
    };
  }
}
