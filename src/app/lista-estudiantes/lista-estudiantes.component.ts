import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { NgFor } from '@angular/common';
import { EstudianteService } from '../estudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-estudiantes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-estudiantes.component.html',
  styleUrl: './lista-estudiantes.component.css',
})
export class ListaEstudiantesComponent implements OnInit {

  estudiantes: Estudiante[];

  constructor(private estudianteServicio:EstudianteService, private router:Router) {  }

  ngOnInit(): void {
    this.obtenerEstudiantes();
  }

  actualizarEstudiante(id:number){
    this.router.navigate(['actualizar-estudiante', id]);
  }

  eliminarEstudiante(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Confirma si deseas eliminar al estudiante',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.estudianteServicio.eliminarEstudiante(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEstudiantes();
          Swal.fire(
            'Estudiante eliminado',
            'El estudiante ha sido eliminado con éxito',
            'success'
          );
        });
      }
    });
  }


  private obtenerEstudiantes(){
    this.estudianteServicio.obtenerListaDeEstudiantes().subscribe(dato =>{
      this.estudiantes= dato;
    });
  }

  verDetallesDelEstudiante(id:number){
    this.router.navigate(['estudiante-detalles', id]);
  }
}
