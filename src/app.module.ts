import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RoomModule } from './room/room.module';
import { ApartmentModule } from './apartment/apartment.module';
import { CustomterModule } from './customter/customter.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [ApiModule, AuthModule, UsersModule,
    RoomModule,
    ApartmentModule,
    CustomterModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
