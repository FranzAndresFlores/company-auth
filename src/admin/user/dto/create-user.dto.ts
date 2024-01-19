import { IsNotEmpty, IsOptional } from "class-validator";
import { Account } from "src/admin/account/entities/account.entity";
import { requiredMessage } from "src/company-common/configs/message";

export class CreateUserDto {
    @IsNotEmpty({ message: requiredMessage('nombre') })
    firstName: string;

    @IsNotEmpty({ message: requiredMessage('apellido') })
    lastName: string;

    @IsNotEmpty({ message: requiredMessage('cédula') })
    dni: string;

    @IsNotEmpty({ message: requiredMessage('cuenta') })
    account: Account;

    @IsOptional()
    age: number;

    @IsOptional()
    isActive: boolean;
}
