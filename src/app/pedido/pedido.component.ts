import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto.component';
import { Cliente } from '../cliente/cliente.component';
import { Router } from '@angular/router';
import { faBus, faCheese, faHome, faSearch, faTaxi, faTractor } from '@fortawesome/free-solid-svg-icons';

interface Pedido {
  cliente: string;
  produto: string;
  quantidade: number;
  data: Date;
}

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  faLupa = faSearch; 

  constructor(public router: Router) { }

  public cliente: string = "";
  public produto: string = "";
  public quantidade: string = "";

  public comboProdutos: Produto[] = [];
  public comboClientes: Cliente[] = [];

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllClients();
  }

  public handleSalvar() {
    var objSalvar: Pedido = {
      cliente: this.cliente,
      produto: this.produto,
      quantidade: parseInt(this.quantidade),
      data: new Date()
    }

    const pedidoStored = this.getAllPedidos();

    this.savePedidosLocalStorage([...pedidoStored, objSalvar]);
  }

  public getAllPedidos() {
    const pedidos = JSON.parse(String(localStorage.getItem('pedidos')));

    return pedidos ? pedidos : [];
  }

  public savePedidosLocalStorage(pedidos: Pedido[]) {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    this.cliente = "";
    this.produto = "";
    this.quantidade = "";
  }

  public getAllProducts() {
    const produtos = JSON.parse(String(localStorage.getItem('produtos')));

    const produtosCombo = produtos ? produtos : [];

    this.comboProdutos = produtosCombo;
  }

  public getAllClients() {
    const clientes = JSON.parse(String(localStorage.getItem('clientes')));

    const clientesCombos = clientes ? clientes : [];

    this.comboClientes = clientesCombos;
  }

  public selecaoProduto(){
    return this.router.navigateByUrl('/selecaoProduto');

    //input group no bootstrap
}
}
