import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service.js';

@Injectable()
export class AccountService {
    private constructor(private readonly prismaService: PrismaService) { }

    public async findAll() {
        const users = await this.prismaService.user.findMany();
        return users
    }
}
