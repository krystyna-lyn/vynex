import { ConfigService } from '@nestjs/config';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { isDev } from '../shared/utils/is-dev.util.js';
import { join } from 'path';
import type { Request, Response } from 'express';


export function getGraphqlConfig(
    configService: ConfigService
): ApolloDriverConfig {
    return {
        playground: isDev(configService),
        path: configService.getOrThrow<string>('GRAPHQL_PREFIX'),
        autoSchemaFile: join(process.cwd(), 'src/core/graphql/schema.gql'),
        sortSchema: true,
        context: ({ req, res }: { req: Request; res: Response }) => ({ req, res }),

    };
}