
var Z1 = 0;
var Z2 = 0;
function Test() {
  alert("test");
}

function copyInput(){ 
	Z1 = parseInt(document.getElementById("Z1").value);
	Z2 = parseInt(document.getElementById("Z2").value);
	Z3 = parseInt(document.getElementById("Z3").value);
	document.getElementById("test").innerHTML ="" ;
	if (Z2<Z1) {
		alert("Max muss größer sein als Min!");
	}else if (Z2==Z1) {
		alert("Zahlen dürfen nicht den gleichen Wert haben!");
	}else {
		Z2 = Z2 + 1;
		for (let i = 0; i < Z3; i++) {
			R1 = Math.floor(Math.random() * (Z2 - Z1) + Z1);
			 document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + R1 + ", "  ;
		}
	}

			document.getElementById("test").innerHTML = document.getElementById("test").innerHTML.substring(0, document.getElementById("test").innerHTML.length - 2);
}                                        

				