import { Body, Delete, Get, Param, Post } from "@nestjs/common";
import { ProductsService } from "../services/products.service";
import { ProductDto } from "../dto/product.dto";

export class ProductController{
    constructor(private productsService: ProductsService){}

    @Get()
    async findAll(){
        return this.productsService.finAll();
    }

    @Get('name')
    async findOne(@Param('name')id:string){
        const data =this.productsService.findOne('name');
        return{
            date:Date,
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

    @Delete('name')
    async delete(@Param('name')id:string){
        const serviceResponse =await this.productsService.remove('name')
        return{
            data: serviceResponse,
            message: 'Producto Eliminado'
        }
    }
}