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

    @Get(':id/user')
    async findShipperBySupplierUserId(@Param('id')id:string){
        const shippers = await this.shippersService.findShippersBySupplierUserId(id)
        console.log(shippers);
        return{
            data: shippers,
            message: 'Dato Encontrado'
        }
    }
    
    @Get(':id/supplier')
    async findShippersBySupplierId(@Param('id')id:string){
        const shippers = await this.shippersService.findShippersByUser(id)
        console.log(shippers);
        return{
            data: shippers,
            message: ' Encontrado'
        }
    }

    @Get(':id')
    async findOne(@Param('id')id:string){
        const shipper = await this.shippersService.findOne(id)
        console.log(shipper);
        return{
            data: shipper,
            message: 'Repartidor Encontrado'
        }
    }

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
    async create(@Body() payload: ShipperDto) {
        console.log(payload)
        const serviceResponse = await this.shippersService.create(payload);
        return {
            data: serviceResponse,
            message: 'Repartidor creado'
        }
    }
}