
function rInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRndmMatrix() {
  // the number of rows and columns
  let m = rInt(1, 4)
  let n = rInt(1, 6)
  //create 2 dimensional array
  let AA = Array.from(Array(m), () => new Array(n));
  let i
  let j

  for (i = 0; i <= m - 1; i++) {
    for (j = 0; j <= n - 1; j++) {
      AA[i][j] = rInt(-15, 15)
    }
  }
  //console.log(AA[0].length, AA.length)
  //console.log(m,n)
  //console.log("--------")

  return AA

}

genMatrix()

function genMatrix() {
  BB = createRndmMatrix()
  document.getElementById("matrixDim").innerHTML = math.parse(String(math.matrix(BB))).toTex();

  // to render the text as mathjax
  let m1 = document.getElementById("matrixDim");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, m1]);

  // make the input boxes empty
  document.getElementById("rowmval").value = "";
  document.getElementById("colnval").value = "";
  document.getElementById("answer").innerHTML = "";
}


function checkMatrixMN() {
  var m, n, text;
  // Get the value of the input field with id="rowmval"
  m = document.getElementById("rowmval").value;
  n = document.getElementById("colnval").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(m) || isNaN(n) || m == "" || n == "") {
    text = "Input(s) is/are not a number or empty";
  } else if (m == BB.length && n == BB[0].length) {
    text = "Both $m$ and $n$ are Correct"
  } else if (m == BB.length && n != BB[0].length) {
    text = "$m$ correct but $n$ incorrect"
  } else if (m != BB.length && n == BB[0].length) {
    text = "$m$ incorrect but $n$ correct"
  } else {
    text = "Both $m$ and $n$ are incorrect"
  }

  document.getElementById("answer").innerHTML = text;
  // to render the text as mathjax
  let m2 = document.getElementById("answer");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, m2]);
}







//let dimss = [ BB.length, BB[0].length ];
//console.log("***********")
//console.log(dimss)
//console.log("++++++++++")
//document.getElementById("matrixDim").innerHTML += String(dimss)