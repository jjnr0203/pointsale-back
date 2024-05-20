import { Controller, Get, Param } from '@nestjs/common';
import { CataloguesService } from '../services/catalogues.service';

@Controller('catalogues')
export class CatalogueController {
  constructor(private cataloguesService: CataloguesService) {}

  @Get()
  async findAll() {
    return this.cataloguesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.cataloguesService.findOne(id);
    return {
      data: data,
      message: 'catalogos encontrados',
    };
  }

  

  
}
