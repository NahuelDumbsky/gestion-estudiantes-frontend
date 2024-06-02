import { Component } from '@angular/core';
import { Estudiante } from '../estudiante';
import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from '../estudiante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estudiante-detalles',
  standalone: true,
  imports: [],
  templateUrl: './estudiante-detalles.component.html',
  styleUrl: './estudiante-detalles.component.css'
})
export class EstudianteDetallesComponent {

  id:number;
  estudiante:Estudiante;
  constructor(private route:ActivatedRoute, private estudianteServicio:EstudianteService){  }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.estudiante = new Estudiante();
    this.estudianteServicio.obtenerEstudiantePorId(this.id).subscribe(dato => {
      this.estudiante = dato;
      Swal.fire(`Detalles del estudiante ${this.estudiante.nombre}`)
    });
  }
}
