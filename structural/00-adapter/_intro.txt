https://www.youtube.com/watch?v=Y69BsV9-23M&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=16&ab_channel=Ot%C3%A1vioMiranda
https://www.youtube.com/watch?v=5AiiHFizQWY&list=PL5aY_NrL1rjtP1GVk1lxifkeob1F09L4p&index=3&ab_channel=FullCycle

Adapter

Intenção Oficial:

Converter a interface de uma classe em outra interface esperada pelos clientes.
O Adapter permite que certas classes trabalhem em conjunto, pois de outra forma seria impossivel
por causa de suas interfaces incompatíveis.

* É muito usado para definir limites dentro de camadas da aplicação

* Faz juz ao nome, é um adaptador (Pense em um adaptador de tomadas, segue essa analogia)

* Pode ser usado para adaptar interfaces de código legado para um novo código

Aplicabilidade:

* Quando você não quer que seu código dependa diretamente de códigos de terceiros ou legado

* Quando você quiser usar uma classe existente mas a sua interface for incompatível com a interface
que seu código ou domínio precisam.


Coisas boas sobre o uso:

* Desacopla o código da aplicação de códigos de terceiros

* Aplica o SRP (single responsability principal) ao separar a conversão de interfaces da lógica da aplicação

* Aplica o OCP (open close principal) ao permitir introduzir novos Adapters para o código existente

DE Ruim:

* Aumenta a complexibilidade da aplicação (Por outro lado, qual outra solução deveria ser aplicada?)
