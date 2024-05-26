import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ProductsService } from "../services/products.service";
import { ProductDto } from "../dto/product.dto";

@Controller('products')
export class ProductController{
    constructor(private productsService: ProductsService){}

    @Get()
    async findAll(){
        return await this.productsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id')id:string){
        const data = await this.productsService.findOne(id);
        return{
            data: data,
            message: 'Producto Encontrado'
        }
    }

    @Post()
    async create(@Body()payload: ProductDto){
        const serviceResponse = await this.productsService.create(payload);
        return{
            data: serviceResponse,
            message: 'Producto Creado'
        }
    }

    @Delete(':id')
    async delete(@Param('id')id:string){
        const serviceResponse =await this.productsService.remove(id)
        return{
            data: serviceResponse,
            message: 'Producto Eliminado'
        }
    }
}