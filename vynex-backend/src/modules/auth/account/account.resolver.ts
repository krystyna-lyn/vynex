import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from './account.service.js';
import { UserModel } from './models/user.model.js';
import { CreateUserInput } from './input/create.user.input.js';

@Resolver('Account')
export class AccountResolver {
  constructor(private readonly accountService: AccountService) { }

  @Query(() => [UserModel], { name: 'findAllUsers' })
  public async findAll() {
    return this.accountService.findAll()
  }

  @Mutation(() => UserModel, { name: 'createUser' })

  public async create(@Args('data') input: CreateUserInput) {
    return this.accountService.create(input)
  }

}
