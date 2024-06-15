import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CataloguesService } from '../services/catalogues.service';
import { CatalogueDto } from '../dto/catalogue.dto';
import { UpdateCatalogueDto } from '../dto/update-catalogue.dto';

@Controller('catalogues')
export class CatalogueController {
  constructor(private cataloguesService: CataloguesService) {}

  @Get()
  async findByType(@Query('type')type:string) {
    const data = await this.cataloguesService.findByType(type)
    return {
      data:data,
      message:'catálogos encontrados'
    }
  }

  @Get('create')
  async findRoleByName(@Query('name')name:string) {
    const data = await this.cataloguesService.findRoleByName(name)
    return {
      data:data,
      message:'catalogo para crear un usuario'
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.cataloguesService.findOne(id);
    return {
      data: data,
      message: 'catalogos encontrados',
    };
  }

  

  @Post('')
  async create(@Body() payload:CatalogueDto){
    const data = await this.cataloguesService.create(payload)
    return {
      data: data,
      message:'catálogo creado'
    }
  }

  @Put(':id')
  async update(@Param('id') id:string, @Body() payload:UpdateCatalogueDto){
    const data = await this.cataloguesService.update(id,payload)
    return{
      data: data,
      message: 'Catálogo actualizado'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id:string){
    const data = await this.cataloguesService.remove(id)
    return{
      data:data,
      message:'Catálogo eliminado'
    }
  }
}
