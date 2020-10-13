import { Component, OnInit } from '@angular/core';
import { Resena } from '../resena';
import { ResenaService } from '../resena.service';
import { ResenaDetail } from '../resenaDetail';

@Component({
  selector: 'app-resena-listar',
  templateUrl: './resena-listar.component.html',
  styleUrls: ['./resena-listar.component.css']
})
export class ResenaListarComponent implements OnInit {
  
  resenas: Array<ResenaDetail>;
  selectedResena: Resena;
  selected = false;

  constructor(private resenaService: ResenaService) { }
  
  getResenas(): void {
    this.resenaService.getResenas()
      .subscribe(resenas => {
        this.resenas = resenas;
      });
  }
  onSelected(b: Resena): void {
    this.selected = true;
    this.selectedResena = b;
  }
  ngOnInit() {
    this.getResenas();
  }

}
