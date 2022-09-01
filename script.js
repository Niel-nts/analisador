document.addEventListener("keypress", function(enter){
    if (enter.key === "Enter"){
        adicionar()
    }
}) 

function adicionar(){
    var num = document.getElementById('txtnum')
    var val = document.getElementById('valores')    
    if (Number(num.value)<1 || num.value.length == 0 || Number(num.value)>100){
        window.alert('Por favor digite um número entre 1 e 100!')
    } else {                    
        var n = Number(num.value)
        if (list.indexOf(n)==-1){                         
            list[c] = n
            c++                              
            var item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            valores.appendChild(item) 
        } else {
            window.alert('Valor já consta como registrado!')
        }
        num.value = ''               
        num.focus()
    }    
}

function analise(){                    
    list.sort((a, b) => a-b)
    var soma = 0
    var res = document.getElementById('analise')
    for (c=0; c<list.length; c++){
        soma+=list[c]
    }        
    res.innerHTML = `Ao todo temos ${list.length} números cadastrados <br>
    O maior valor informado foi ${list[list.length-1]}<br>
    O menor valor informado foi ${list[0]}<br>
    Somando todos os valores temos ${soma}<br>
    A média dos valores é ${soma/list.length}`
}

var list = []
var c = 0