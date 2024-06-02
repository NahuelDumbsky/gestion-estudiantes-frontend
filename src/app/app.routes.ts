import { Routes } from '@angular/router';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { RegistrarEstudianteComponent } from './registrar-estudiante/registrar-estudiante.component';
import { ActualizarEstudianteComponent } from './actualizar-estudiante/actualizar-estudiante.component';
import { EstudianteDetallesComponent } from './estudiante-detalles/estudiante-detalles.component';

export const routes: Routes = [
  {path: 'estudiantes', component:ListaEstudiantesComponent},
  {path: '', redirectTo:'estudiantes', pathMatch:'full'},
  {path: 'registrar-estudiantes', component: RegistrarEstudianteComponent},
  {path: 'actualizar-estudiante/:id', component: ActualizarEstudianteComponent},
  {path: 'estudiante-detalles/:id', component: EstudianteDetallesComponent}
];
