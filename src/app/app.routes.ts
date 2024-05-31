import { Routes } from '@angular/router';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { RegistrarEstudianteComponent } from './registrar-estudiante/registrar-estudiante.component';

export const routes: Routes = [
  {path: 'estudiantes', component:ListaEstudiantesComponent},
  {path: '', redirectTo:'estudiantes', pathMatch:'full'},
  {path: 'registrar-estudiantes', component:RegistrarEstudianteComponent}
];
