import {
  Inject,
  OnWSMessage,
  WSController,
} from '@midwayjs/decorator';
import { Context } from '../../../../../src';

@WSController('/', { middleware: []})
export class APIController {
  @Inject()
  ctx: Context;

  @OnWSMessage('message')
  async gotMyMessage() {
    throw new Error('custom error');
  }
}
