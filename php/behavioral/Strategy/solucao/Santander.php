<?php

class Santander implements CalculaJurosStrategyInterface {
  
	
	public function getTaxaDeJuros(Pedido $pedido) {
    return 10;
	}
}