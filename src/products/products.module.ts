// products.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Agregar esta importación
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductSchema } from './entities/product.entity';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]), // Registrar el modelo de Producto
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
