/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentsService: StudentService) {}

  // Get method to fetch all students
  @Get()
  getStudents() {
    return this.studentsService.getStudents();
  }

  // Get method to fetch a student by Id
  @Get(':id')
  getStudentById(@Param('id') id: number) {
    return this.studentsService.getStudentById(Number(id));
  }

  // Post method to add a new student
  @Post()
  postStudent(@Body() newStudent: { id: number; name: string; age: number }) {
    return this.studentsService.addStudent(newStudent);
  }

  //   Put method to edit a student
  @Put()
  editStudent(@Body() newStudent: { id: number; name: string; age: number }) {
    return this.studentsService.editStudent(newStudent);
  }
}
