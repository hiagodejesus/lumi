import { IsInt, IsString, IsDecimal } from "class-validator";


export class CreateUserDto {
    @IsString()
    name: string;
}

export class UpdateUserDto {
    @IsInt()
    id: number;
    @IsString()
    name: string;
}

export class UserResponseDto {
    @IsInt()
    id: number;
    @IsString()
    name: string;
}
