import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-game',
  templateUrl: './cadastro-game.component.html',
  styleUrls: ['./cadastro-game.component.css']
})
export class CadastroGameComponent {

  dadosCadastroForm = new FormGroup({
    jogoNome: new FormControl(''),
    jogoValor: new FormControl('')
  });


  onSubmit() {
    console.warn(this.dadosCadastroForm.value);
  }


}
