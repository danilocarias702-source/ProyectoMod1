import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { TareasListComponent } from './tareas-list/tareas-list.component';
import { TareaDetailComponent } from './tarea-detail/tarea-detail.component';

const routes: Routes = [
  { path: '', component: TareasListComponent },
  { path: ':id', component: TareaDetailComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class TareasRoutingModule {}
