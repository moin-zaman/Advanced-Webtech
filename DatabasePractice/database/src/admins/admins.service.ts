import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminEntity } from './entities/admin.entity';
import { FoodEntity } from './entities/food.entity';
import { AddFoodDto } from './dto/add-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';


@Injectable()
export class AdminsService {

  //Injecting Admins Repository

  constructor(@InjectRepository(AdminEntity) private readonly adminRepo: Repository<AdminEntity>,
  @InjectRepository(FoodEntity) private readonly foodRepo: Repository<FoodEntity>
  ) {

  }

  


  create(createAdminDto: CreateAdminDto) : Promise<AdminEntity> {
    let admin : AdminEntity = new AdminEntity();
    admin.name = createAdminDto.name;
    admin.age = createAdminDto.age;
    admin.email = createAdminDto.email;
    admin.password = createAdminDto.password;
    admin.salary = createAdminDto.salary;
    //admin.location = createAdminDto.location;
    //admin.relStatus = createAdminDto.relStatus;
    return this.adminRepo.save(admin);
  }

  findAll() : Promise<AdminEntity[]> {
    return this.adminRepo.find();
  }

  findOne(id: number) {
    return this.adminRepo.findOneBy({id});
  }


  AdminByIDName(qry):any {
    return this.adminRepo.findOneBy({ id:qry.id,name:qry.name });
}


  update(id: number, updateAdminDto: UpdateAdminDto) {
    let admin : AdminEntity = new AdminEntity();
    admin.name = updateAdminDto.name;
    admin.age = updateAdminDto.age;
    admin.email = updateAdminDto.email;
    admin.password = updateAdminDto.password;
    admin.salary = updateAdminDto.salary;
    //admin.location = updateAdminDto.location;
    //admin.relStatus = updateAdminDto.relStatus;
    admin.id = id;
  
    return this.adminRepo.save(admin);
  }




  updateAdminByNameId(name,id):any {
    console.log(name+id);
    return this.adminRepo.update(id,{name:name});
    }



  remove(id: number) {
    return this.adminRepo.delete(id);
  }




  //Food Add Service


  addFood(addFoodDto: FoodEntity) : Promise<FoodEntity> {
    let food : FoodEntity = new FoodEntity();
    food.fname = addFoodDto.fname;
    food.ftype = addFoodDto.ftype;
    food.price = addFoodDto.price;
    return this.foodRepo.save(food);
  }


  findAllFood() : Promise<FoodEntity[]> {
    return this.foodRepo.find();
  }

  findOneFood(id: number) {
    return this.foodRepo.findOneBy({id});
  }


  updateFood(id: number, addFoodDto: FoodEntity) {
    let food : FoodEntity = new FoodEntity();
    food.fname = addFoodDto.fname;
    food.ftype = addFoodDto.ftype;
    food.price = addFoodDto.price;
    food.id = id;
    return this.adminRepo.save(food);
  }



  updateFoodByNameId(fname,id):any {
    console.log(fname+id);
    return this.foodRepo.update(id,{fname:fname});
    }



  removeFood(id: number) {
    return this.foodRepo.delete(id);
  }

  





}
