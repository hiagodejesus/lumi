import { IsInt, IsOptional, IsDecimal, IsPositive } from "class-validator";

export class CreateBillDto {
    @IsDecimal()
    @IsPositive()
    kwh: number;
    @IsDecimal()
    @IsPositive()
    total: number;
}

export class UpdateBillDto {
    @IsInt()
    id: number;
    @IsOptional()
    @IsDecimal()
    @IsPositive()
    kwh?: number;
    @IsOptional()
    @IsDecimal()
    @IsPositive()
    total?: number;
}

export class BillResponseDto {
    id: number;
    kwh: number;
    total: number;

    createdAt: Date;
}

