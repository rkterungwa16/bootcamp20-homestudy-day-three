module.exports = {
	findMissing: function (arr1, arr2) {

		var arr1Size = arr1.length;
		var arr2Size = arr2.length;
		var set = {}; 
		
		for (var i = 0; i < arr1Size; i++) {
			set[arr1[i]] = true;
		}

		for (var j = 0; j < arr2Size; j++) {
			if ((arr2[j] in set)){
				delete set[arr2[j]];
			}
			else {
				set[arr2[j]] = true;
			}
		}

		for (var key in set) {
			if( set.hasOwnProperty(key)) {
				return parseInt(key);
			} 
		}
		return 0;
	}
}