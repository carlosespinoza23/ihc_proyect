import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/models/curso.model';
import { ProfesorService } from '../../services/profesor.service';

@Component({
  selector: 'app-main-page-profesor',
  templateUrl: './main-page-profesor.component.html',
  styleUrl: './main-page-profesor.component.css'
})
export class MainPageProfesorComponent implements OnInit {

  courses: Curso[] = [];
  randomColors: String[] = [];

  constructor(
    private profesorService: ProfesorService
  ) { }

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos(): void {
    this.profesorService.getMyCourse().subscribe((response: Curso[]) => {
      this.courses = response;
      this.courses.forEach((curso) => this.assignRandomColors(curso));
    });
  }

  randomColor(): string {
    const hue = Math.floor(Math.random() * 360); // Tonos de 0 a 360 grados
    const saturation = Math.floor(Math.random() * 50) + 50; // Saturación entre 50% y 100%
    const lightness = Math.floor(Math.random() * 20) + 60; // Luminosidad entre 50% y 70%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  assignRandomColors(curso: Curso): void {
    curso.color = this.randomColor();
  }

}