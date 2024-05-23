import { Body, Delete, Get, Param, Post } from "@nestjs/common";
import { ShopsService } from "../services/shops.service";
import { ShopDto } from "../dto/shop.dto";

export class ShopController{
    constructor(private shopService: ShopsService){}

    @Get()
    async findAll(){
        return this.shopService.finAll();
    }

    @Get('ruc')
    async findOne(@Param('ruc')id:string){
        const data =this.shopService.findOne('id');
        return{
            date: Date,
            message: 'Producto Encontrado'
        }
    }

    @Post()
    async create(@Body()payload:ShopDto){
        const serviceResponse = await this.shopService.create(payload);
        return{
            date: serviceResponse,
            message: 'Producto Creado'
        }
    }

    @Delete('ruc')
    async delete(@Param('ruc') id: string) {
        const serviceResponse = await this.shopService.remove(id)
        return {
            data: serviceResponse,
            message: 'Producto eliminado'
        }
}
}