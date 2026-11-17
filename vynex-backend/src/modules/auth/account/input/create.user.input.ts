import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, Matches, IsEmail, MinLength } from 'class-validator';
@InputType()
export class CreateUserInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-Z0-9_]+(?:-[a-zA-Z0-9]+)*$/)
    public username: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    public password: string;
}