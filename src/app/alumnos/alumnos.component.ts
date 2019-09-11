import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../alumnos';
import {ALUMNOS} from '../mock-alumnos';
  
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
   alumnos = ALUMNOS;
   selectedAlumnos:Alumnos;

   
  constructor() { }

  ngOnInit() {
  }

  onSelect(alumnos:Alumnos):void{
    this.selectedAlumnos=alumnos;
  }


}

