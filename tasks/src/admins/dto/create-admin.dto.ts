import {
    IsString,
    IsInt,
    IsNumber,
    IsNotEmpty,
  } from "class-validator";
  

export class CreateAdminDto {
    @IsNotEmpty({message: "This field must be required"})
    @IsString({message:"Please enteyour name "})
    name: string;

    @IsNotEmpty({message: "This field must be required"})
    @IsInt({message: "Please enter any integer number"})
    age: number;


    @IsNotEmpty({message: "This field must be required"})
    @IsInt({message: "Please enter any integer number"})
    id: number;

    @IsNotEmpty({message: "This field must be required"})
    @IsInt({message: "Please enter any integer number"})
    password: number;
}
