import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UrlConstantes } from '../../shared/url-constantes'

@Injectable({
  providedIn: 'root'

})

export class HeaderService {

  constructor(protected http: HttpClient, httpClient: HttpClientModule) {
    //super(http);
  }

  public getTopicos() {
    this.http.get(UrlConstantes.GET_TOPICOS).subscribe(response => {
      console.log(response);
    }, err => {
      console.log('Erro ao executar getTopicos: ' + err);
    });
  }
}
