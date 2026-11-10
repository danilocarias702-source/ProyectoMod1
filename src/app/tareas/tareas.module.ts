import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasListComponent } from './tareas-list/tareas-list.component';
import { TareaDetailComponent } from './tarea-detail/tarea-detail.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptFormsModule, TareasRoutingModule],
  declarations: [TareasListComponent, TareaDetailComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TareasModule {}
