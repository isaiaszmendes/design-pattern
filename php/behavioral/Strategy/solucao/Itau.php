<?php

class Itau implements CalculaJurosStrategyInterface {
  
	public function getTaxaDeJuros(Pedido $pedido) {
    return 20;
	}
}