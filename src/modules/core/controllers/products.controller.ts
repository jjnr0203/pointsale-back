import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductDto } from '../dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get(':id/shop')
  async findByShop(@Param('id') id:string) {
    const data = await this.productsService.findByShop(id);
    return {
      data: data,
      message: 'Producto por tienda'
    }
  }

  @Get()
  async findAll() {
    const data = await this.productsService.findAll();
    return { 
      data:data,
      message:'Producto encontrado'
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.productsService.findOne(id);
    return {
      data: data,
      message: 'Productos encontrados'
    };
  }


  @Put(':id')
    async update(@Param('id') id:string, @Body() payload:UpdateProductDto){
      const data = await this.productsService.update(id, payload);
      return{
        data: data,
        message: 'Producto actualizado'
      }
    };

  @Post('')
    async create(@Body() payLoad: ProductDto){
      const data = await this.productsService.create(payLoad);
      return{
        data: data,
        message: 'Producto creado'
      }
    }
   
    @Delete(':id')
      async remove(@Param('id') id:string){
        const data =await this.productsService.remove(id);
        return{
          data: data,
          message: 'Producto eliminado'
        }
      }     
}
