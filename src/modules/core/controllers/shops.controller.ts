import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ShopsService } from "../services/shops.service";
import { ShopDto } from "../dto/shop.dto";

@Controller('shops')
export class ShopController{
    constructor(private shopsService: ShopsService){}

    @Get()
    async findAll(){
        return await this.shopsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id')id:string){
        const data = await this.shopsService.findOne(id);
        return{
            data: data,
            message: 'Producto Encontrado'
        }
    }

    @Post()
    async create(@Body()payload:ShopDto){
        const serviceResponse = await this.shopsService.create(payload);
        return{
            date: serviceResponse,
            message: 'Producto Creado'
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const serviceResponse = await this.shopsService.remove(id)
        return {
            data: serviceResponse,
            message: 'Producto eliminado'
        }
}
}