import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { CustomerDto } from '../dto/customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private customersService: CustomersService) {}

  @Get()
  async findAll() {
    return await this.customersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.customersService.findOne(id);
    return {
      data: data,
      message: 'clientes encontrados',
    };
  }

  @Put(':id')
    async update(@Param('id') id:string, @Body() payload:UpdateCustomerDto){
      const data = await this.customersService.update(id, payload);
      return{
        data: data,
        message: 'cliente actualizado',
      }
    };

  @Post('')
    async create(@Body() payLoad: CustomerDto){
      const data = await this.customersService.create(payLoad);
      return{
        data: data,
        message: 'cliente creado',
      }
    }
   
    @Delete(':id')
      async remove(@Param('id') id:string){
        const data =await this.customersService.remove(id);
        return{
          data: data,
          message: 'cliente eliminado',
        }
      }     
}
