import { Component } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

declare var bootstrap:any;

@Component({
  selector: 'app-selecao-produto',
  templateUrl: './selecao-produto.component.html',
  styleUrls: ['./selecao-produto.component.css']
})
export class SelecaoProdutoComponent {
  faLupa = faSearch;
  public codigo_produto:string = '';
  public nome_produto:string = '';
  constructor(
    public produto_service:ProdutoService
  ){
    produto_service.getProdutosFromLocalStorage();
  }

  carregar(){
    let produto = this.produto_service.registro(Number(this.codigo_produto));
    if (produto != undefined && this.codigo_produto != ''){
      this.nome_produto = produto.nome;
    }else{
      this.codigo_produto = '';
      this.nome_produto = '';
    }

  }

  setProduto(indice_produto:number){
    this.codigo_produto = String(indice_produto);
    this.carregar();

    let modal = bootstrap.Modal.getInstance(document.getElementById('listaPesquisaProduto'));
    modal.hide();
    
  }
}