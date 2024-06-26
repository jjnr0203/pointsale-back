import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SuppliersService } from "../services/suppliers.service";
import { UpdateSupplierDto } from "../dto/update-supplier.dto";
import { SupplierDto } from "../dto/supplier.dto";
import { get } from "http";

@Controller('suppliers')
export class SuppliersController{
    constructor(private suppliersService:SuppliersService){}

    @Get()
    async findSuppliers(){
        const serviceResponse = await this.suppliersService.findAll()
        console.log(serviceResponse)
        /* return {
            data: serviceResponse,
            message: 'Suppliers'
        } */
    }
    @Get(':id/shop')
    async findByShop(@Param('id') id:string){
        const serviceResponse = await this.suppliersService.findByShop(id)
         return {
            data: serviceResponse,
            message: 'Suppliers'
        }
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        const supplier = await this.suppliersService.findOne(id)
        console.log(supplier)
        return {
            data: supplier,
            message: 'Supplier Encontrado'
        }
    }
    @Get(':id/user')
    async findByUser(@Param('id') id:string){
        const supplier = await this.suppliersService.findByUser(id)
        console.log(supplier)
        return {
            data: supplier,
            message: 'Supplier Encontrado'
        }
    }

    
    @Put(':id')
    async update(@Param('id') id:string, @Body() supplier:UpdateSupplierDto){
        const updateSupplier = await this.suppliersService.update(id, supplier)
        return {
            data: updateSupplier,
            message: 'Supplier Actualziado'
        }
    }

    @Post('')
    async create(@Body() supplierDto:SupplierDto){
        const serviceResponse = await this.suppliersService.create(supplierDto)
        return{
            data: serviceResponse,
            message: 'Supplier Creado'
        }
       return supplierDto

    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        const supplier = await this.suppliersService.remove(id)
        return{
            data: supplier,
            message: 'Supplier Eliminado'
        }
    }

}