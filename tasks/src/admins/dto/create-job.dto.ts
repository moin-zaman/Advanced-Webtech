import {
    IsString,
    IsEmail,
    IsIn,
    IsInt,
    IsNumber,
    IsBoolean,
    IsOptional,
    ArrayMinSize,
    IsNotEmpty,
    ValidateNested,
    IsObject,
  } from "class-validator";

import { Type } from "class-transformer";


export  class LocationDTO {
    @IsNotEmpty({message: "This field must be required"})
    @IsString({message:"Please enter the name of the city "})
    city: string;

    @IsNotEmpty({message: "This field must be required"})
    @IsString({message:"Please enter the name of the country "})
    country: string;
}
export class CreateJobDTO {
    @IsNotEmpty({message: "This field must be required"})
    @IsInt({message: "Please enter any integer number"})
    id: number;

    @IsNotEmpty({message: "This field must be required"})
    @IsString({message:"Please enter the name of the city "})
    companyName: string;


    @IsNotEmpty({message: "This field must be required"})
    @IsString({message:"Please enter the name of the title "})
    title: string;

    @IsNotEmpty({message: "This field must be required"})
    @IsEmail()
    email: string;

    @IsNotEmpty({message: "This field must be required"})
    @IsInt({message: "Please enter any integer number"})
    experience: number;

    @IsNotEmpty({message: "This field must be required"})
    @IsNumber({},{message: "Please enter your salary"})
    salary: number;

    @IsString({ each: true })
    @ArrayMinSize(1)
    tags: string[];

    @ValidateNested()
    @IsObject()
    @Type(() => LocationDTO)
    location: LocationDTO;
}
