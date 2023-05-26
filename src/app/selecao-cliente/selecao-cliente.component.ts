import { Component } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

declare var bootstrap:any;

@Component({
  selector: 'app-selecao-cliente',
  templateUrl: './selecao-cliente.component.html',
  styleUrls: ['./selecao-cliente.component.css']
})
export class SelecaoClienteComponent {
  faLupa = faSearch;
  public codigo_cliente:string = '';
  public nome_cliente:string = '';
  constructor(
    public cliente_service:ClienteService
  ){
    cliente_service.recuperarClientes();
  }

  carregar(){
    let cliente = this.cliente_service.registro(Number(this.codigo_cliente));
    if (cliente != undefined && this.codigo_cliente != ''){
      this.nome_cliente = cliente.nome;
    }else{
      this.codigo_cliente = '';
      this.nome_cliente = '';
    }

  }

  setCliente(indice_cliente:number){
    this.codigo_cliente = String(indice_cliente);
    this.carregar();

    let modal = bootstrap.Modal.getInstance(document.getElementById('listaPesquisaCliente'));
    modal.hide();
    
  }
}