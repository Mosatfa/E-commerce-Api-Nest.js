import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { Subcategory, SubcategorySchema } from '../subcategory/schema/subcategory.schema';
import { Brand, BrandSchema } from '../brand/schema/brand.schema';
import { User, UserSchema } from '../user/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Product.name, schema: ProductSchema },
    { name: Brand.name, schema: BrandSchema },
    { name: Subcategory.name, schema: SubcategorySchema },
    { name: User.name, schema: UserSchema }
  ])],
  controllers: [ProductController],
  providers: [ProductService, CloudinaryService, JwtService, UserService]
})
export class ProductModule { }
