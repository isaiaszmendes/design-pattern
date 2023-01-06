Os padrões de projeto comportamentais (behavioral) se preocupam
com algoritmos, a atribuição de responsabilidades entre objetos
e os padrões de comunicação entre eles

Strategy

Intenção: Definir uma família de algoritmos, encapsular cada um deles e fazê-los intercambiáveis.
O Strategy permite que o algoritmo varie independentemente dos clientes que o utilizem.

Sobre o Strategy:
* Separa a regra de negécio de variações de algoritmos que possam existir
* Defini uma familia de algoritmos cada uma variação diferente
* Usa composição para permitir a troca de algoritmo em tempo de execução
* Permiti a criação de vários algoritmos sem a necessidade de condicionais

Use o Strategy quando:

* Você tiver variantes de um mesmo algoritmo e precisa trocar esses algoritmos em tempo de execução
* Você precisa isolar a regra de negécio do algoritmo que deve ser aplicado(aplicando o principio da responsabilidade unica)
* Você perseber que está usando condicionais apenas para trocar o resultado final de um algoritmo