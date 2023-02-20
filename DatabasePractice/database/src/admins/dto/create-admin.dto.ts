import { Type } from "class-transformer";
import {
    IsString, IsInt, IsNumber, IsNotEmpty, IsEmail, Length, IsOptional, IsObject, ValidateNested, Min, Max
  } from "class-validator";
  



  /*export  class LocationDTO {

    @IsString({message:"Please enter the name of the city in proper way "})
    city: string;

    @IsString({message:"Please enter the name of the country in proper way "})
    country: string;

}*/






export class CreateAdminDto {

    id: number;


    @IsNotEmpty({message: "Your name field must be required"})
    @IsString({message:"Please enter your name ex: xyz"})
    name: string;


    @IsNotEmpty({message: "Your age field must be required"})
    @IsInt({message: "Please enter your age ex: 24"})
    age: number;


    @IsEmail({}, {message: "Please provide your valid email"})
    email: string;
    

    @IsNotEmpty({message: "Your password field must be required"})
    @IsInt({message: "Please enter your password ex: 1234"})
    password: number;

    @IsNumber({},{message: "Please enter your salary between 100 to 200000"})
    @Min(100)
    @Max(200000)
    salary: number;



    





    /*@ValidateNested()
    @IsObject()
    @Type(() => LocationDTO)
    location: LocationDTO;*/



    //@IsOptional()
    //relStatus: string;

}
