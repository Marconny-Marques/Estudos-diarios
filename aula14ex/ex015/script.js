function contar() {
    var numinicio = document.getElementById('numinicio')
    var numfim = document.getElementById('numfim')
    var passo1 = document.getElementById('passo')
    var numin = Number(numinicio.value)
    var numf = Number(numfim.value)
    var passo = Number(passo1.value)
    var res = document.getElementById('res')
    if(numinicio.value.length == 0){
        res.innerText = 'impossivel contar'
    } else if (passo == 0){
        alert('passo invalido, considerando passo = 1')
        var passo = 1
        while(numin <= numf){
            res.innerText += ` ${ numin }`
             numin = numin + passo
         }
    } else {
        for( ; numin <= numf ; numin = numin + passo ){
            res.innerText += ` ${numin} `
        }
        }
        /*while(numIn <= numF){
          res.innerText += ` ${ numIn }`
           numIn = numIn + passo*/
       }