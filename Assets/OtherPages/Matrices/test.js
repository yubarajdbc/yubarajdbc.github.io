		function MTmatrix(ID2put, mm = 2, nn = 3) {
		  var x = document.createElement("TABLE");
		  x.setAttribute("id", "table1");

		  // x.style.border = "solid yellow";
		  //x.style.width = '100%';
		  //x.cellPadding='0';
		  //x.cellSpacing='0';
		  x.style = "width:70%;border-left:2px  solid white; 						border-right:2px  solid white; ";
		  //x.color = 'rgb(174, 222, 135)';
      //x.border = '2px solid white';
      x


		  // x.setAttribute('border', '2');

		  var p001 = document.getElementById(ID2put);
		  p001.appendChild(x);

		  let cellVal = Array.from(Array(mm), () => new Array(nn)); // to create 2D array
		  let inputID = Array.from(Array(mm), () => new Array(nn)); // to create 2D array
		  let rowVal = new Array(mm * nn);

		  for (let i = 0; i < mm; i++) {
		    rowVal[i] = x.insertRow();

		    for (let j = 0; j < nn; j++) {
		      inputID[i][j] = document.createElement("INPUT");
		      inputID[i][j].setAttribute("type", "number");
		      if (i == 0 && j == 0) {
		        // console.log(i, j)
		        inputID[i][j].style = "width:100%;font-size:120%;border-left:2px  solid green;"
		      } else {
		        inputID[i][j].style = "width:100%;font-size:120%;"
		      }

		      cellVal[i][j] = rowVal[i].insertCell();
		      cellVal[i][j].style = 'border-collapse:collapse;border-top: none;border-bottom: none;border:0px;';
		      cellVal[i][j].appendChild(inputID[i][j]);

		      //cellVal[i][j].innerText =String(i)+"--"+String(j);

		    }
		  }

      // console.dir(x)
      let u = document.getElementById("table1")
      console.log("iiiiiiiiiiii")
      console.dir(u)
		}