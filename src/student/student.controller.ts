/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  // Patch,
  Post,
  Put,
  // Put,
} from '@nestjs/common';
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

  // Put method to edit a student
  @Put()
  editStudent(@Body() studentData: { id: number; name: string; age: number }) {
    return this.studentsService.updateStudent(
      Number(studentData.id),
      studentData,
    );
  }

  // PATCH
  @Patch()
  patchStudent(
    @Body() studentData: Partial<{ id: number; name: string; age: number }>,
  ) {
    return this.studentsService.patchStudent(
      Number(studentData.id),
      studentData,
    );
  }

  // Delete method to delete a student by Id
  @Delete()
  deleteStudent(@Body('id') id: number) {
    return this.studentsService.deleteStudent(Number(id));
  }
}
