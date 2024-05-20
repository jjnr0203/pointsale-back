import { Module } from '@nestjs/common';
import { CataloguesService } from './services/catalogues.service';
import { CatalogueController } from './controllers/catalogues.controller';
import { DatabaseModule } from 'src/database/database.module';
import { coreProviders } from './providers/core.providers';

@Module({
    imports:[DatabaseModule],
    providers: [CataloguesService,...coreProviders],
    controllers: [CatalogueController],
    exports:[]
})
export class CoreModule {}
