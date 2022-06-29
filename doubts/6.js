let arr = [];
process.stdout.write(`enter an array of 3 numbers: `);

function inputExample(i){
	console.log(`enter number at index ${i}`);
}
process.stdin.on("data", function(data){
	arr.push(parseInt(data));
	if(arr.length < 3){
		inputExample(arr.length);
	}
	else process.exit();
});

process.on("exit", function(){
	console.log(arr);
})

inputExample();
