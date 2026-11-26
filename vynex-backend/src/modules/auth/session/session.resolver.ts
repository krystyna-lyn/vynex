import { Resolver } from '@nestjs/graphql';
import { SessionService } from './session.service.js';

@Resolver('Session')
export class SessionResolver {
  constructor(private readonly sessionService: SessionService) {}
}
