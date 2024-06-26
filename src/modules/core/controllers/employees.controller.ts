import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { EmployesService } from "../services/employes.service";
import { EmployeeEntity } from "../entities/employee.entity";
import { EmployeDto } from "../dto/employee.dto";

@Controller('employees')
export class EmployeesController {
    constructor(private employesService: EmployesService) { }

    @Get()
    async findAll() {
        return this.employesService.findAll();
    }

    @Get('/:shopId')
    async findEmployeeByShop(@Param('shopId') shopId: string):Promise<EmployeeEntity[]>{
        return this.employesService.findEmployeesByShop(shopId);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const data = this.employesService.findOne(id);
        return {
            date: Date,
            message: 'Empleados encontrados'
        }
    }

    @Get(':id/user')
    async findByUser(@Param('id') id: string) {
        const data = await this.employesService.findByUser(id);
        return {
            data: data,
            message: 'Empleados encontrados'
        }
    }

    @Post()
    async create(@Body() payload: any) {
        console.log(payload)
        const serviceResponse = await this.employesService.create(payload);
        return {
            data: serviceResponse,
            message: 'Empleado creado'
        }
    }

    

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const serviceResponse = await this.employesService.remove(id)
        return {
            data: serviceResponse,
            message: 'Empleado eliminado'
        }
    }
}