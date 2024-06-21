import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './driver/driver.module';
import { CarModule } from './car/car.module';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [DriverModule, CarModule, BudgetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
