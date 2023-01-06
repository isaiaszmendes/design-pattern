<?php

$pedido = new Pedido(10);

$calculadora = new CalculadoraDeJuros(new Santander());
// $calculadora = new CalculadoraDeJuros(new Itau());

$calculadora->calculaJuros($pedido);