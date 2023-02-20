import {
    IsString, IsInt, IsNumber, IsNotEmpty, Min, Max
  } from "class-validator";
  

export class AddFoodDto {

    id: number;


    @IsNotEmpty({message: "Food name field must be required"})
    @IsString({message:"Please enter the food name ex: xyz"})
    fname: string;


    @IsNotEmpty({message: "Food type field must be required"})
    @IsString({message:"Please enter the food type ex: FastFood"})
    ftype: string;

   

    @IsNumber({},{message: "Please enter the food price salary between 50 to 2000"})
    @Min(50)
    @Max(2000)
    price: number;

}
