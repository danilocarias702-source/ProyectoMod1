import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Tarea, TareasService } from '../../core/tareas.service';

@Component({
  selector: 'ns-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css']
})
export class TareaDetailComponent implements OnInit {
  tarea?: Tarea;

  constructor(
    private route: ActivatedRoute,
    private tareasService: TareasService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.tarea = this.tareasService.getTarea(id);
  }

  alternar(): void {
    if (this.tarea) {
      this.tareasService.alternar(this.tarea.id);
    }
  }
}
