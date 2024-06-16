import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { CustomerDto } from '../dto/customer.dto';
import { ShopsService } from '../services/shops.service';

@Controller('customers')
export class CustomerController {
  constructor(private customersService: CustomersService,private shopsService:ShopsService) {}

  @Get()
  async findAll() {
    const data = await this.customersService.findAll();
    return { 
      data:data,
      message:'customers encontrados'
    }
  }

 /*  @Get(':id/shop')
  async findCustomersByShop(@Param('id') id:string){
      const data = await this.shopsService.findCustomersByShop(id)
      return {
        message:'Clientes por tienda',
        data:data
      }
  } */

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.customersService.findOne(id);
    return {
      data: data,
      message: 'clientes encontrados',
    };
  }

  @Get(':id/shop')
  async findByShops(@Param('id') id:string){
    const data = await this.customersService.findByShop(id)
    return {
      message:'clientes por tienda',
      data:data
    }
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
