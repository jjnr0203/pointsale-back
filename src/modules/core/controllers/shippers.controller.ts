import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ShippersService } from "../services/shippers.service";
import { ShipperDto } from "../dto/shipper.dto";

@Controller('shipper')
export class ShippersController{
    constructor(private shippersService:ShippersService){}

    @Get()
    async findAll(){
        const serviceResponse = await this.shippersService.findAll()
        console.log(serviceResponse);
        return {
            data: serviceResponse,
            message: 'Usuarios Encontrados'
        }
    }

    @Get(':id')
    async findOne(@Param('id')id:string){
        const shipper = await this.shippersService.findOne(id)
        console.log(shipper);
        return{
            data: shipper,
            message: 'Shipper Encontrado'
        }
    }

    @Post('')
    async create(@Param() shipperDto:ShipperDto){
        const serviceResponse = await this.shippersService.create(shipperDto)
        return {
            data: serviceResponse,
            message: 'Shipper Creado'
        }
    }

    @Delete(':id')
    async delete(@Param('id')id:string){
        const shipper = await this.shippersService.findOne(id)
        return{
            data: shipper,
            message: 'Shipper Eliminado'
        }
    }
}