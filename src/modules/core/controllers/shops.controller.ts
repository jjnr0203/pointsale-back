import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ShopsService } from "../services/shops.service";
import { ShopDto } from "../dto/shop.dto";
import { UpdateShopDto } from "../dto/update-shop.dto";

@Controller('shops')
export class ShopsController{
    constructor(private shopsService: ShopsService){}

    @Get()
    async findAll() {
        const data = await this.shopsService.findAll();
        return {
            data: data,
            message: 'Tienda encontrada'
        } 
    }
    @Get(':id/user')
    async findShopsByUSer(@Param('id') id:string){
        const data = await this.shopsService.findShopsByUser(id)
        return {
            data: data,
            message: 'Tiendas por usuario'
        } 
    }
    
    @Get(':id')
    async findOne(@Param('id') id:string){
        const data = await this.shopsService.findOne(id) 
        return {
            data: data,
            message: 'Tienda Encontrada'
        }
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() payload:UpdateShopDto){
        const data = await this.shopsService.update(id,payload)
        return{
            data:data,
            message:'Tienda actualizada',
        }
    }

    @Post('')
    async create(@Body() payload: ShopDto) {
        const data = await this.shopsService.create(payload);
        return {
            data: data,
            message: 'Tienda creada'
        };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const data = await this.shopsService.remove(id)
        return {
            data: data,
            message: 'Tienda eliminada'
        }
   }
}