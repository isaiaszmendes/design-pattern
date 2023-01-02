https://www.youtube.com/watch?v=yimeXZ1twWs&ab_channel=C%C3%B3digoFonteTV
https://www.youtube.com/watch?v=JnCWTbICOWg&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H&index=5&ab_channel=Ot%C3%A1vioMiranda

Singleton:

"Garante a criação de uma unica instancia de uma classe através de toda aplicação,
mantendo um ponto global de acesso ao seu objeto"

Uso para
Logger
conexões com banco de dados

* Classe carrega e retorna a própria instancia 

Consequencias:

* Hoje é considerado como um anti pattern pois não é thread safe
(duas ou mais thread podem acessar o mesmo objeto ao mesmo tempo causando efeitos colaterais)

* Dificuldades para trabalhar com testes, pois para cada teste vc espera uma unica instancia mas não é isso que acontece,
pois vc estará utilizando a mesma instanceia

* Quebra o SOLID

Ver mais sobre Monostate