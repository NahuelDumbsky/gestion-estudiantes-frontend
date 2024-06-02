import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudianteService } from '../estudiante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar-estudiante',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './actualizar-estudiante.component.html',
  styleUrl: './actualizar-estudiante.component.css'
})
export class ActualizarEstudianteComponent implements OnInit {

  id:number;
  estudiante:Estudiante = new Estudiante();
  constructor(private estudianteService:EstudianteService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.estudianteService.obtenerEstudiantePorId(this.id).subscribe(dato =>{
      this.estudiante = dato;
    },error => console.log(error));
  }

  irAlaListaDeEstudiantes(){
    this.router.navigate(['/estudiantes']);
    swal.fire('Estudiante actualizado',`El estudiante ${this.estudiante.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.estudianteService.actualizarEstudiante(this.id,this.estudiante).subscribe(dato => {
      this.irAlaListaDeEstudiantes();
    },error => console.log(error));
  }
}
