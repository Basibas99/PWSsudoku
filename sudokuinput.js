function oplossenSudoku() {
	var sudoku =[];
	sudoku.push(oplossenSudoku1());
	sudoku.push(oplossenSudoku2());
	sudoku.push(oplossenSudoku3());
	sudoku.push(oplossenSudoku4());
	sudoku.push(oplossenSudoku5());
	sudoku.push(oplossenSudoku6());
	sudoku.push(oplossenSudoku7());
	sudoku.push(oplossenSudoku8());
	sudoku.push(oplossenSudoku9());
	console.log(sudoku);
}
	
	





function oplossenSudoku1() {
	var A = [];
	for (i = 1; i < 10; i++){
		ai = document.getElementById("A" + i).value;
		if (ai == ""){
			ai = "0"
		}
		A.push(ai);};
	return A;
}

function oplossenSudoku2() {
	var B = [];
	for (i = 1; i < 10; i++){
		ai = document.getElementById("B" + i).value;
		if (ai == ""){
			ai = "0"
		}
		B.push(ai);};
	return B;
}
function oplossenSudoku3() {
	var C = [];
	for (i = 1; i < 10; i++){
		ai = document.getElementById("C" + i).value;
		if (ai == ""){
			ai = "0"
		}
		C.push(ai);};	
	return C;
}
function oplossenSudoku4() {
	var D = [];
	for (i = 1; i < 10; i++){
		ai = document.getElementById("D" + i).value;
		if (ai == ""){
			ai = "0"
		}
		D.push(ai);};
	return D;
}
function oplossenSudoku5() {
	var E = [];
	for (i = 1; i < 10; i++){
		ai = document.getElementById("E" + i).value;
		if (ai == ""){
			ai = "0"
		}
		E.push(ai);};
	return E;
}
function oplossenSudoku6() {
	var F = [];
	for (i = 1; i < 10; i++){
		ai = document.getElementById("F" + i).value;
		if (ai == ""){
			ai = "0"
		}
		F.push(ai);};
	return F;
}
function oplossenSudoku7() {
	var G = [];
	for (i = 1; i < 10; i++){
		ai = document.getElementById("G" + i).value;
		if (ai == ""){
			ai = "0"
		}
		G.push(ai);};
	return G;
}
function oplossenSudoku8() {
	var H = [];
	for (i = 1; i < 10; i++){
		ai = document.getElementById("H" + i).value;
		if (ai == ""){
			ai = "0"
		}
		H.push(ai);};
	return H;
}
function oplossenSudoku9() {
	var I = [];
	for (i = 1; i < 10; i++){
		ai = document.getElementById("I" + i).value;
		if (ai == ""){
			ai = "0"
		}
		I.push(ai);};
	return I;
		
}


function clearSudoku() {
	
	
}