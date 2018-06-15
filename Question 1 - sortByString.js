var check = function(s,t){
  var newS = s.split('')
  var newString = ''
  for (let i = 0; i < t.length; i++){
    while (newS.indexOf(t[i]) != -1){
     newString += t[i]
     newS.splice(newS.indexOf(t[i]), 1)
    }
  }
  return newString
}
