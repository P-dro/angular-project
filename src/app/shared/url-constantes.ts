import { Injectable } from '@angular/core';

const CONTEXTO = 'http://localhost:8080/pedro/API/jogo';

@Injectable()
export class UrlConstantes {

    public static GET_JOGOS = CONTEXTO + '/listaJogos';



}
