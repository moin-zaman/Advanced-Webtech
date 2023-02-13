import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateJobDTO } from './dto/create-job.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

let jobId = 1;

@Injectable()
export class AdminsService {
  private ADMINS = new Map<number, CreateAdminDto>()
  private JOBS = new Map<number, CreateJobDTO>()

  

  create(AdminDto: CreateAdminDto) {

    this.ADMINS.set(AdminDto.id, AdminDto);
    return 'This action adds a new admin';
  }

  findAll() {
    return Array.from(this.ADMINS, ([_id, admin]) => admin);
  }

  findOne(id: number) {
    const admin = this.ADMINS.get(id);

    if (!admin) {
      return { message: "ADMIN NOT FOUND" };
    }

    return admin;
    
  }

  update(id: number, updateAdminDto: CreateAdminDto) {
    const admin = this.ADMINS.get(id);

    if (!admin) {
      return { message: "ADMIN NOT FOUND" };
    }

    this.ADMINS.set(id, updateAdminDto);

    return { message: "ADMIN UPDATED" };
  }



  updatePass(id: number, updateAdminDto: CreateAdminDto) {
    const admin = this.ADMINS.get(id);

    if (!admin) {
      return { message: "ADMIN NOT FOUND" };
    }

    this.ADMINS.set(id, updateAdminDto);

    return { message: "Password UPDATED" };
  }


  remove(id: number) {

    this.ADMINS.delete(id);

    return { message: "ADMIN DELETED" };
  }

  createJob(createJobDto: CreateJobDTO | CreateJobDTO) {
    const job = Object.assign({ ...createJobDto, id: jobId++ });

    this.JOBS.set(job.id, job);

    return job;
  }

}
