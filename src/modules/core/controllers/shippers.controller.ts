import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ShippersService } from "../services/shippers.service";
import { ShipperDto } from "../dto/shipper.dto";
import { SupplierEntity } from "../entities/supplier.entity";

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
    async findShippersBySupplierId(@Param('id')id:SupplierEntity){
        const shipper = await this.shippersService.findShippersBySuppierId(id)
        console.log(shipper);
        return{
            data: shipper,
            message: 'Shipper Encontrado'
        }
    }

    /* @Get(':id')
    async findOne(@Param('id')id:string){
        const shipper = await this.shippersService.findOne(id)
        console.log(shipper);
        return{
            data: shipper,
            message: 'Shipper Encontrado'
        }
    } */

    /* @Post('')
    async create(@Param() shipperDto:ShipperDto){
        const serviceResponse = await this.shippersService.create(shipperDto)
        return {
            data: serviceResponse,
            message: 'Shipper Creado'
        }
    } */

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const serviceResponse = await this.shippersService.remove(id)
        return {
            data: serviceResponse,
            message: 'Repartidor eliminado'
        }
    }

    @Post()
    async create(@Body() payload: any) {
        console.log(payload)
        const serviceResponse = await this.shippersService.create(payload);
        return {
            data: serviceResponse,
            message: 'Repartidor creado'
        }
    }
}