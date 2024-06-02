import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { FormsModule } from '@angular/forms';
import { EstudianteService } from '../estudiante.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-estudiante',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registrar-estudiante.component.html',
  styleUrl: './registrar-estudiante.component.css'
})
export class RegistrarEstudianteComponent implements OnInit {

  estudiante : Estudiante = new Estudiante();
  constructor(private estudianteServicio:EstudianteService, private router:Router){

  }

  ngOnInit(): void {
  }

  guardarEstudiante(){
    this.estudianteServicio.registrarEstudiante(this.estudiante).subscribe(dato =>{
      console.log(dato);
      this.irAListaDeEstudiantes();
    }, error => console.log(error));
  }

  irAListaDeEstudiantes(){
    this.router.navigate(['/estudiantes'])
  }

  onSubmit(){
    this.guardarEstudiante();
  }

}
