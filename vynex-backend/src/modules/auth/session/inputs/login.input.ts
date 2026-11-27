import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, Matches, IsEmail, MinLength } from 'class-validator';
@InputType()
export class LoginInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    public login: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    public password: string;
}