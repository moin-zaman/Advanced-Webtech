import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, ParseIntPipe } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AddFoodDto } from './dto/add-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Controller('admins')
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

  @Get('/AdminId/:id')
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(+id);
  }



  @Get('/findAdminIdName')
  AdminByIDName(@Query() qry: any): any {
    return this.adminsService.AdminByIDName(qry);
  }



  @Put('/update/:id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(+id, updateAdminDto);
  }



  @Put('/updateNameId')
  updateAdminByNameId(@Body('name') name: string, @Body('id') id: number): any {
    return this.adminsService.updateAdminByNameId(name, id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsService.remove(+id);
  }


  //Food Add


  @Post('/addFood')
  addFood(@Body() addFoodDto: AddFoodDto) {
    return this.adminsService.addFood(addFoodDto);
  }


  @Get('/findAllFood')
  findAllFood() {
    return this.adminsService.findAllFood();
  }


  @Get('/FoodById/:id')
  findOneFood(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.findOneFood(+id);
  }


  @Put('/updateFood/:id')
  updateFood(@Param('id') id: string, @Body() updateFoodDto: UpdateAdminDto) {
    return this.adminsService.update(+id, updateFoodDto);
  }



  @Patch('/updateFoodNameId')
  updateFoodByNameId(@Body('fname') fname: string, @Body('id') id: number): any {
    return this.adminsService.updateFoodByNameId(fname, id);
  }

  

  @Delete('/removeFood/:id')
  removeFood(@Param('id') id: string) {
    return this.adminsService.removeFood(+id);
  }

}
