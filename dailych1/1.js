let listNumber=[1,7,10,16]
let number=17

function um(list , k) {
    let copylist = list
    copylist.splice(k,1)

    for (let i = 0; i < list.length; i++) {
        for (let a = i+1; a < copylist.length; a++) {
            if (i+a === k){
              return true
            }
            else{
                return false
            }
            
        }  
      }
}

console.log(um(listNumber,17))