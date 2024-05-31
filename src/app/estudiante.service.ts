import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from './estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  //Esta url obtiene el listado de todos los estudiantes en el backend
  private baseUrl="http://localhost:8080/api/v1/estudiantes";

  constructor(private httpClient : HttpClient) { }

  //este metodo sirve para obtener los estudiantes
  obtenerListaDeEstudiantes():Observable<Estudiante[]>{
    return this.httpClient.get<Estudiante[]>(this.baseUrl)
  }

  //este metodo sirve para registrar un estudiante
  registrarEstudiante(estudiante:Estudiante):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,estudiante)
  }

  //este metodo sirve para actualizar un estudiante
  actualizarEstudiante(id:number, estudiante:Estudiante):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, estudiante);
  }

}
