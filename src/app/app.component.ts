import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ListaEstudiantesComponent } from "./lista-estudiantes/lista-estudiantes.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListaEstudiantesComponent, HttpClientModule, RouterLinkActive, RouterLink, FormsModule]
})
export class AppComponent {
  title = 'Sistema de gestion de estudiantes';
}
