import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tela= "tela-inicial";
  noticias=[];
  titulo = null;
  conteudo = null;
  autor = null;
  emailDoAutor = null;
  data = null;

  salvar(){
    const noticia = {
      titulo: this.titulo,
      conteudo: this.conteudo,
      autor: this.autor,
      emailDoAutor: this.emailDoAutor,
      data: this.data,
    };
    this.noticias.push(noticia)
  }
  irTelaCadastro(){
    this.tela = "cadastro"
  }
  irTelaPublicar(){
    this.tela = "tela-publicar"
  }
  irTelaEstatisticas(){
    this.tela = "tela-estatisticas"
  }
  irTelaInicial(){
    this.tela = "tela-inicial"
  }
}
