import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { NgFor } from '@angular/common';
import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-lista-estudiantes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-estudiantes.component.html',
  styleUrl: './lista-estudiantes.component.css',
})
export class ListaEstudiantesComponent implements OnInit {
actualizarEstudiante(arg0: number) {
throw new Error('Method not implemented.');
}

  estudiantes: Estudiante[];

  constructor(private estudianteServicio:EstudianteService) {

  }

  ngOnInit(): void {
    this.obtenerEstudiantes();
  }

  private obtenerEstudiantes(){
    this.estudianteServicio.obtenerListaDeEstudiantes().subscribe(dato =>{
      this.estudiantes= dato;
    });
  }
}
