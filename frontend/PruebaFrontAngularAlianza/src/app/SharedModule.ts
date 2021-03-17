import { NgModule } from '@angular/core';
import {AppMaterialModule} from './app.material.module';
import {MatTableExporterModule} from 'mat-table-exporter';

@NgModule({
  imports:      [ AppMaterialModule, MatTableExporterModule],
  declarations: [  ],
  exports:      [
    AppMaterialModule, MatTableExporterModule]
})
export class SharedModule { }
