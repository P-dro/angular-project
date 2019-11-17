import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent extends AppComponent implements OnInit {

  constructor(
    private serviceHeaderService: HeaderService
  ) {
    super();
  }

  public responseTopicos;

  ngOnInit() {
    this.getAllTopics();

  }

  getAllTopics() {
    return this.serviceHeaderService
      .getTopicos()
      .subscribe((data: any) =>
        this.responseTopicos = data.content,
        error => console.log("Erro na consulta", error),
        () => { }
      );
  }

}
