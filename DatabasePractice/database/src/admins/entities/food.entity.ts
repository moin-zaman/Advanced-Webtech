
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';

@Entity("food")

export class FoodEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fname: string;

  @Column()
  ftype: string;

  @Column()
  price: number;

  
}
