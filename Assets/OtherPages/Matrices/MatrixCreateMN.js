// Welcome to linear algebra nuggets


//requires math.js from https://unpkg.com/mathjs@7.2.0/dist/math.min.js
// and of course MathJax for rendering the math

//------------------------------------------------------------------
function renderDjax(ID4convert) {
  // Render javascript pushed text as mathjax
  let m1 = document.getElementById(ID4convert);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, m1]);
}

//------------------------------------------------------------------
//------------------------------------------------------------------

function genMatrix(ID2put01, ID2MT01) {
  // ID2put01 is the ID of html element where the matrix is to be displayed
  // ID2MT01 is an array of html element IDs which are to be emptied (hence MT)

  // create a matrix
  //BB = createRndmMatrix();
  let m = math.randomInt(1, 5)
  let n = math.randomInt(1, 7)
  BB = math.randomInt([m, n], -25, 35)

  document.getElementById(ID2put01).innerHTML = math
    .parse(String(math.matrix(BB))).toTex();

  // to render the text as mathjax
  renderDjax(ID2put01);

  // get id of parent div and make it stop celebrating, if your were celebrating before
  let xbx = document.getElementById(ID2put01).parentElement.id;
  stopcelebrate(xbx, 0)
  // console.log(xbx)
}


//------------------------------------------------------------------
//------------------------------------------------------------------
function MTelemenst(ID2MT01) {
  // Empty out irrelevant elements, whose IDs are contained in the array ID2MT01

  ID2MT01.forEach(function (item, index) {
    // This removes content from input type elements
    document.getElementById(ID2MT01[index]).value = "";
    // This removes content from paragraph/div type elements
    document.getElementById(ID2MT01[index]).innerHTML = "";
  })
}

//------------------------------------------------------------------
//------------------------------------------------------------------
function checkMatrixMN(ID2put02, [rowid, colid]) {
  // ID2put02 is the id of the element where the result is to be displayed
  // rowid,colid id of input elements for row and column of matrix

  let m, n, text;
  // Get the value of the input field with id="rowmval"
  m = document.getElementById(rowid).value;
  n = document.getElementById(colid).value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(m) || isNaN(n) || m == "" || n == "") {
    text = "Input(s) is/are not a number or empty";
  } else if (m == BB.length && n == BB[0].length) {
    text = "Both $m$ and $n$ are Correct";

    // get id of parent div and make it celebrate
    let xbx = document.getElementById(ID2put02).parentElement.id;
    // celebrate the correct answer
    startcelebrateCorrect(xbx)
    stopcelebrate(xbx)

  } else if (m == BB.length && n != BB[0].length) {
    text = "$m$ correct but $n$ incorrect";
  } else if (m != BB.length && n == BB[0].length) {
    text = "$m$ incorrect but $n$ correct";
  } else {
    text = "Both $m$ and $n$ are incorrect";
  }


  document.getElementById("answer").innerHTML = text;
  // to render the text as mathjax
  renderDjax("answer");
}

//------------------------------------------------------------------
//------------------------------------------------------------------
function startcelebrateCorrect(div2putfireworks, tym = 1000) {
  /* celebrate on correct answer
   start celebration after 0.5 seconds */
  setTimeout(function () {
    document.getElementById(div2putfireworks).style.backgroundImage = 'url("https://i.gifer.com/WS2k.gif")';
    document.getElementById(div2putfireworks).style.backgroundSize = '30% 50%';
    document.getElementById(div2putfireworks).style.backgroundRepeat = 'no-repeat';
  }, tym);
}

//------------------------------------------------------------------
//------------------------------------------------------------------
function stopcelebrate(div2stopfireworks, tym = 5900) {
  // stop celebration after 3 seconds
  //if the element exist then 
  if (document.getElementById(div2stopfireworks)) {
    setTimeout(function () {
      document.getElementById(div2stopfireworks).style.backgroundImage = null
    }, tym);
  }
}

//------------------------------------------------------------------
//------------------------------------------------------------------
function createM_Element(ids = "checkElement01") {
  // Depending on the matrix size, find a random position
  m = math.randomInt(1, BB.length)
  n = math.randomInt(1, BB[0].length)
  let text = "A(" + String(m) + "," + String(n) + ") =";

  // set up the generated position as the question.
  let answerx = BB[m - 1][n - 1];
  document.getElementById(ids).innerHTML = text;
}

//-----------------------------------------------------
function checkelement(IDin = "elementval01", IDout = "answer01") {
  // IDin is the element from which to read the input answer
  // IDout is the element where to display the result
  let MatElmnt = document.getElementById(IDin).value;
  let answerx = BB[m - 1][n - 1];
  let text
  
  // check whether correct or not
  if (isNaN(MatElmnt) || MatElmnt == "") {
    text = "Please input the value of element";
  } 
  else if (MatElmnt == answerx) {
    text = "Your answer is correct";
    // get id of parent div and make it celebrate
    let xbx = document.getElementById(IDout).parentElement.id;
    // celebrate the correct answer
    startcelebrateCorrect(xbx)
    stopcelebrate(xbx)
  } else {
    text = "Your answer is incorrect, try again";
  }
  document.getElementById(IDout).innerHTML = text;
}

//         Sanity Checks
//let dimss = [ BB.length, BB[0].length ];
//console.log("***********")
//console.log(dimss)
//console.log("++++++++++")
//document.getElementById("matrixDim").innerHTML += String(dimss)