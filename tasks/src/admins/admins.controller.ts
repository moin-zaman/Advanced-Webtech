import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateJobDTO } from './dto/create-job.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('/admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post('/create')
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @Get('/findAll')
  findAll() {
    return this.adminsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: CreateAdminDto) {
    return this.adminsService.update(+id, updateAdminDto);
  }


  @Put('/pass/:id')
  updatePass(@Param('id') id: string, @Body() updatePassDto: CreateAdminDto) {
    return this.adminsService.update(+id, updatePassDto);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsService.remove(+id);
  }


  @Post('/createJob')
    createJob(@Body() createJobDto: CreateJobDTO) {
      return this.adminsService.createJob(createJobDto);
    }



}
