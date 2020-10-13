import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }
  private usuarios: Array<Usuario>;
  getUsuarios(): void {
    this.usuarioService.getUsuarios()
      .subscribe(usuarios => {
        this.usuarios = usuarios;
      });
  }
  ngOnInit() {
    this.getUsuarios();
  }

}
