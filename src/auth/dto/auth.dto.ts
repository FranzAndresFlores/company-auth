import { IsNotEmpty } from "class-validator";
import { requiredMessage } from "src/company-common/configs/message";

export class SignInDto {
    @IsNotEmpty({ message: requiredMessage('usuario') })
    email: string;

    @IsNotEmpty({ message: requiredMessage('contraseña') })
    password: string;
}

export class ValidateTokenDto {
    @IsNotEmpty({ message: requiredMessage('token') })
    token: string;
}

export class RefreshTokenDto {
    @IsNotEmpty({ message: requiredMessage('id Usuario') })
    idUser: number;
}



