<?php

interface CalculaJurosStrategyInterface {
  public function getTaxaDeJuros(Pedido $pedido);
}