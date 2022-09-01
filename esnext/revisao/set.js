// set e um conjunto sem index que nao aceita repetiçao

const times = new Set
times.add('cruzeiro')
times.add('flamengo')
times.add('vasco')
times.add('palmeiras')
times.add('cruzeiro')
console.log(times)

//outra forma de adicionar e passando um arrey como parametro no operador (new)
const pessoa = ['Roberto','Samara','Laura','Eduarda','Mingau','Geovana','Nega']
const ps = new Set(pessoa)
console.log(ps)