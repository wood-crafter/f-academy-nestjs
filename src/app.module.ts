import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetKissController } from './get-kiss/get-kiss.controller';

@Module({
  imports: [],
  controllers: [AppController, GetKissController],
  providers: [AppService],
})
export class AppModule {}
