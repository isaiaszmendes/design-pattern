<?php

class CalculadoraDeJuros {

  public function calculaJuros(Pedido $pedido) {
    if($pedido->getBanco() == "Santander"){
      $banco = new Santande($pedido);
    } elseif($pedido->getBanco() == "Itau") {
      $banco = new Itau($pedido);
    
    } elseif($pedido->getBanco() == "Bradesco") {
      $banco = new Bradesco($pedido);
    }
    return $banco->getTaxaDeJuros();
  }
}