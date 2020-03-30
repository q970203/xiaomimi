let  searchIndex = function(arr,json,key='id'){
	let index = -1;
	arr.forEach((el,i)=>{
		if(el[key]==json[key]){
			index = i;
		}
	})
	return index;
	
}
export default searchIndex;