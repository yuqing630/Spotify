var check = function(s,t){
  var newS = s.split('')
  var newString = ''
  for (let i = 0; i < t.length; i++){
    while (newS.indexOf(t[i]) != -1){
     console.log(t[i])
     newString += t[i]
     newS.splice(newS.indexOf(t[i]), 1)
     console.log(newS)
    }
  }
  return newString
}
