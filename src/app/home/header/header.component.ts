import { Component, OnInit } from '@angular/core';

import { HeaderService } from './header.service'




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private serviceHeaderService: HeaderService
  ) {
    //super();
  }

  public responseTopicos;

  ngOnInit() {
    this.getItemAoVivo()
  }

  getItemAoVivo() {
    var mudabotao: any;

    return this.serviceHeaderService.getTopicos()
    /* .subscribe((data: any) => this.responseTopicos = data,
      error => console.log("Erro na consulta", error),
      () => { }
    ); */
  }

}
