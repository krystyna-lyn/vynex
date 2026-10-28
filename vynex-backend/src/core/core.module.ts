import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module.js';
import { GraphQLModule } from '@nestjs/graphql';
import { IS_DEV_ENV } from '../shared/utils/is-dev.util.js';
import { getGraphqlConfig } from './graphql.config.js';
import { ConfigService } from '@nestjs/config';
import { RedisModule } from './redis/redis.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: getGraphqlConfig,
      inject: [ConfigService],
    }),
    PrismaModule,
    RedisModule,
  ],

})
export class CoreModule { }
