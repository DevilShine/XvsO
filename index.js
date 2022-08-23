var wrap = document.querySelector(".wrap");

var wrapField = document.createElement("div");

function checkWiner(j) {
  return document.querySelector(".btn-" + j).innerHTML;
}

for (let i = 0; i < 9; i++) {
  var btn = document.createElement("button");
  btn.classList.add("btn-" + i);
  btn.classList.add("button");
  wrapField.append(btn);
}
wrapField.classList.add("wrap-field");
wrap.append(wrapField);

var count = 1;

var numX = 0;
var numO = 0;

var wrapFieldClick = document.querySelector(".wrap-field");
wrapFieldClick.addEventListener("click", function (e) {
  var elem = e.target;
  var check = elem.matches(".button");
  if (check) {
    if (elem.innerHTML == "") {
      if (count % 2 == 1) {
        elem.innerHTML = "X";
        numX++;
      } else if (count % 2 == 0) {
        elem.innerHTML = "O";
        numO++;
      }
    } else {
      count--;
    }
  }

  if (checkWiner(0) == "X" && checkWiner(1) == "X" && checkWiner(2) == "X" || checkWiner(3) == "X" && checkWiner(4) == "X" && checkWiner(5) == "X" || checkWiner(6) == "X" && checkWiner(7) == "X" && checkWiner(8) == "X" || checkWiner(0) == "X" && checkWiner(3) == "X" && checkWiner(6) == "X" || checkWiner(1) == "X" && checkWiner(4) == "X" && checkWiner(7) == "X" || checkWiner(2) == "X" && checkWiner(5) == "X" && checkWiner(8) == "X" || checkWiner(0) == "X" && checkWiner(4) == "X" && checkWiner(8) == "X" || checkWiner(2) == "X" && checkWiner(4) == "X" && checkWiner(6) == "X") {
    for (var i = 0; i < 9; i++) {
      document.querySelector(".btn-" + i).innerHTML = "";
    }
    alert("WIner X");
  } else if (checkWiner(0) == "O" && checkWiner(1) == "O" && checkWiner(2) == "O" || checkWiner(3) == "O" && checkWiner(4) == "O" && checkWiner(5) == "O" || checkWiner(6) == "O" && checkWiner(7) == "O" && checkWiner(8) == "O" || checkWiner(0) == "O" && checkWiner(3) == "O" && checkWiner(6) == "O" || checkWiner(1) == "O" && checkWiner(4) == "O" && checkWiner(7) == "O" || checkWiner(2) == "O" && checkWiner(5) == "O" && checkWiner(8) == "O" || checkWiner(0) == "O" && checkWiner(4) == "O" && checkWiner(8) == "O" || checkWiner(2) == "O" && checkWiner(4) == "O" && checkWiner(6) == "O") {
    for (var i = 0; i < 9; i++) {
      document.querySelector(".btn-" + i).innerHTML = "";
    }
    alert("WIner O");
  }

  if (numX == 5 || numO == 5) {
    for (var i = 0; i < 9; i++) {
      document.querySelector(".btn-" + i).innerHTML = "";
    }
    numX = 0;
    numO = 0;
    alert("Draw")
  }

  count++;
})

