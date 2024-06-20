import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './driver/driver.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [DriverModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
