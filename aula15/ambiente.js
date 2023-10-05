var num = [5 , 6 , 7 , 2  ]
num.push(1)
num.sort() 
console.log(num)
num [4] = 10
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(num[1])
var pos = num.indexOf(0)
console.log(`O valor 8 está na posição ${pos}`)
if (pos == -1) {
    console.log('Posiçao não encontrada')
} else {
    console.log(`O valor está na posição ${pos}`)
}
