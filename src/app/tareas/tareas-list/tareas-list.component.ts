import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Application, isAndroid } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { Tarea, TareasService } from '../../core/tareas.service';

@Component({
  selector: 'ns-tareas-list',
  templateUrl: './tareas-list.component.html',
  styleUrls: ['./tareas-list.component.css']
})
export class TareasListComponent implements OnInit {
  tareas: Tarea[] = [];
  saludo: string = 'Mis tareas';
  nuevaTarea: string = '';

  constructor(
    private tareasService: TareasService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.tareas = this.tareasService.getTareas();

    if (isAndroid) {
      this.saludo = 'Mis tareas en Android';
    }
  }

  agregar(): void {
    this.tareasService.agregar(this.nuevaTarea);
    this.nuevaTarea = '';
  }

  abrir(tarea: Tarea): void {
    this.routerExtensions.navigate(['/tareas', tarea.id]);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
