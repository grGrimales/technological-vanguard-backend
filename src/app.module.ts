import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING || "mongodb+srv://carlosguzman0515:NDoBZHSm2LERtaj7@cluster0.e9gy3wx.mongodb.net/technologicalVanguardDb", {


    }),

    ProductsModule

  ],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
