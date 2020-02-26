import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UrlConstantes } from '../../shared/url-constantes'
import { ProjectService } from 'src/app/shared/services/project.service';

@Injectable({
  providedIn: 'root'

})

export class HeaderService extends ProjectService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getGames() {
    return super.getAll<any>(UrlConstantes.GET_JOGOS);
  }

}
