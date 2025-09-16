/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('testing')
export class TestingController {
  // Define the method
  @Get()

  //   Write the method logic - use the callback function
  getTesting() {
    return 'Testing Controller';
  }
}
