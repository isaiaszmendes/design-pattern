<?php

class CalculadoraDeJuros {
  private $calculadorDeJuros;

  public function __construct(CalculaJurosStrategyInterface $calculadorDeJuros) {
    $this->calculadorDeJuros = $calculadorDeJuros;
  }

  public function calculaJuros(Pedido $pedido) {
    return $this->calculadorDeJuros->getTaxaDeJuros($pedido);
  }
}