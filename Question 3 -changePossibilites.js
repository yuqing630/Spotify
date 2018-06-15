function coinSums (total) {
  var count = 0
	var denominations = [1,2,3]//change this based on the coin denomination
  var recurse = function(num, ind){
    if (num === 0){
      count ++
      return
    }
    if(num > 0){
      for(var i = ind||0; i < denominations.length; i++){
      	if(num - denominations[i] >= 0){
      		recurse(num - denominations[i], i)
      	}
      }
    }
  }
  recurse(total,0)
  return count
}
