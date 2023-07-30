// create-product.dto.ts
import { IsString, IsNumber, IsUrl, Length, Min, Max, IsOptional } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @Length(3, 100)
    title: string;

    @IsString()
    @Length(10, 1000)
    readonly description: string;

    @IsNumber()
    @Min(0)
    @Max(10000)
    @IsOptional()
    readonly price: number;

    @IsUrl()
    @IsOptional()
    readonly image: string;


}
