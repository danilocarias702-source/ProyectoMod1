import { Injectable } from '@angular/core';

export interface Tarea {
  id: number;
  titulo: string;
  hecha: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareas: Tarea[] = [
    { id: 1, titulo: 'Estudiar NativeScript', hecha: false },
    { id: 2, titulo: 'Probar la app en Android', hecha: true },
    { id: 3, titulo: 'Probar la app en iOS', hecha: false },
    { id: 4, titulo: 'Entregar el proyecto', hecha: false }
  ];

  getTareas(): Tarea[] {
    return this.tareas;
  }

  getTarea(id: number): Tarea | undefined {
    return this.tareas.find((t) => t.id === id);
  }

  agregar(titulo: string): void {
    const texto = (titulo || '').trim();
    if (!texto) {
      return;
    }
    this.tareas.push({ id: Date.now(), titulo: texto, hecha: false });
  }

  alternar(id: number): void {
    const tarea = this.getTarea(id);
    if (tarea) {
      tarea.hecha = !tarea.hecha;
    }
  }

  contarPendientes(): number {
    return this.tareas.filter((t) => !t.hecha).length;
  }
}
