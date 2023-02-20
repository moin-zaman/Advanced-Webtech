
import { IsOptional } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, IsNull} from 'typeorm';
//import { LocationDTO } from '../dto/create-admin.dto';

@Entity("admin")

export class AdminEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @Column()
  password: number;

  @Column()
  salary: number;


  


  /*@Column()
  location: LocationDTO;*/

  /*@IsOptional()
  relStatus: string;*/

  
}
