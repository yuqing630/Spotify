function decodeString(str){
	var regex = /(\d+)\[([a-z]*)\]/gi;
	var result = str.replace(regex, (match, num, newStr) => newStr.repeat(num));
	if(regex.test(result)){
		return decodeString(result);
	}
	return result;


}
