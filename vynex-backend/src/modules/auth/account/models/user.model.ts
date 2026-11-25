import { ObjectType, ID, Field } from '@nestjs/graphql';


@ObjectType()
export class UserModel {

    @Field(() => ID)
    public id: string;

    @Field(() => String)
    public email: string;

    @Field(() => String)
    public username: string;

    @Field(() => String)
    public displayName: string;

    @Field(() => String, { nullable: true })
    avatar: string;

    @Field(() => String, { nullable: true })
    public bio: string;

    @Field(() => Date)
    public createdAt: Date;

    @Field(() => Date)
    public updatedAt: Date;
}