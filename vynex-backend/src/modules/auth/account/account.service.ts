import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service.js';
import { CreateUserInput } from './input/create.user.input.js';

@Injectable()
export class AccountService {
    constructor(private readonly prismaService: PrismaService) { }

    public async findAll() {
        const users = await this.prismaService.user.findMany();

        return users
    }

    public async create(input: CreateUserInput) {
        const { username, email, password } = input

        const isUsernameExists = await this.prismaService.user.findUnique({
            where: {
                username
            }
        })
        if (isUsernameExists) {
            throw new ConflictException('This username is already exist')
        }

        const isEmailExist = await this.prismaService.user.findUnique({
            where: {
                email
            }
        })
        if (isEmailExist) {
            throw new ConflictException('This email is already exist')
        }

        const user = await this.prismaService.user.create({
            data: {
                username,
                email,
                password,
                displayName: username
            }
        })
    }

}
