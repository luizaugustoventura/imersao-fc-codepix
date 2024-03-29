import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PixKeyGrpcUnknownError } from '../pix-keys.service';
import { Response } from 'express';

@Catch(PixKeyGrpcUnknownError)
export class PixKeyGrpcUnknownErrorFilter implements ExceptionFilter {
  catch(exception: PixKeyGrpcUnknownError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(500).json({
      statusCode: 500,
      error: exception.message,
    });
  }
}
