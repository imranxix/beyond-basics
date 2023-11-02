// visualize program if still confusing

const x = 2;
var fns = []; // it is assigning function as index value each iteration

{ const x = 5;
	for (let i=0; i<x; i++) {
		fns[i] = function num() {
			return i;
		};
	}
}

console.log(
	(x * 2) === fns[x*2]() // we called fns[4]()
);
// true
