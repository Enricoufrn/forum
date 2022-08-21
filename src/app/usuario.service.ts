import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiServerUrl = '';

  constructor(private httpClient: HttpClient) { }

  public getUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.apiServerUrl}/usuarios`);
  }

  public getUsuariosById(usuarioId: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.apiServerUrl}/${usuarioId}`)
  }

  public createUsuario(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${this.apiServerUrl}/usuarios/add`, usuario);
  }

  public updateUsuario(usuarioId: number, usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(`${this.apiServerUrl}/${usuarioId}`, usuario);
  }

  public deleteUsuarioById(usuarioId: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiServerUrl}/${usuarioId}`);
  }
}
