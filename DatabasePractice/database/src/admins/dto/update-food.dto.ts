import { PartialType } from '@nestjs/mapped-types';
import { AddFoodDto } from './add-food.dto';

export class UpdateFoodDto extends PartialType(AddFoodDto) {}
