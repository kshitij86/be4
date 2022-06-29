function deadlyArray(n){
	/**
	 * n = 20
	 * 5 4
	 * 10 2
	 * 
	 * 20 -> {2,2,5}
	 */
	function isPrime(x){
		for(let i=2; i*i<x;i++){
			if(x%i == 0)
				return false;
		}
		return true;
	}

	function gcd(a, b){
		// euclidean gcd
		if(b == 0){
			return a;
		}
		return gcd(b, a%b);
	}

	let factors = [];
	let temp = n;
	for(let i=2; i<=n; i++){
		if(isPrime(i)){
			while((temp%i) == 0){
				temp /= i;
				factors.push(i);
			}
		}
	}
	let res = [];
	// remove all factors that dont follow gcd property
	for(let i=0; i<factors.length-1; i++){
		// maintain the property gcd(a[k], a[k+1]) == a[k]
		if(gcd(factors[i], factors[i+1]) === factors[i]){
			// code to remove all occurences of element that violates property 
		}
	}
	console.log(factors);
	return factors.length;
}

console.log(deadlyArray(200));