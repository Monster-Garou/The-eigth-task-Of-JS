
let a = prompt('first name')
let b = prompt('second name')
let c = prompt('third name')
let arr = ([a, b, c])
function maxName(arr) {
   alert(arr.reduce((e, f) => (e.length < f.length) ? f : e)) 
   }
maxName(arr)
