import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: 'El campo nombre es requerido' })
    firstname: string;

    @IsNotEmpty({ message: 'El campo apellido es requerido' })
    lastname: string;

    @IsOptional()
    age: number;

    @IsOptional()
    isActive: boolean;
}
