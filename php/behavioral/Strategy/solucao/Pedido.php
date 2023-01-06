<?php

class Pedido {
  private $total;

  public function __construct($total){
    $this->total = $total;
  }

  public function getTotal() {
    return $this->total;
  }
}