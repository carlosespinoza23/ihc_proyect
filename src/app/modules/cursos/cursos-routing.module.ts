import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleCursoComponent } from './componentes/detalle-curso/detalle-curso.component';
import { CursosPageComponent } from './page/cursos-page/cursos-page.component';
import { BibliotecaComponent } from './componentes/biblioteca/biblioteca.component';

const routes: Routes = [
  {
    path: 'all',
    component: CursosPageComponent
  },
  {
    path: 'detalles/:nombreCurso',
    component: DetalleCursoComponent

  }, {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },{
    path: 'biblioteca',
    component: BibliotecaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
