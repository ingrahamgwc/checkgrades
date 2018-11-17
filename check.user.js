// ==UserScript==
// @name          checkgrades
// @namespace     http://github.com/ingrahamgwc
// @description   check your grades
// @include       https://ps.seattleschools.org/guardian/home.html
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

alert("hello");

var elementlist = document.getElementsByTagName("td");


function getCol(tableid, col) {
  var table = document.getElementById(tableid);
  var n = table.rows.length;
  var s = "";
  
  for (var i = 3; i < n; i++){
    var tr = table.rows[i];
    if (tr.cells.length > col){
      var td = tr.cells[col];
      
      var str = td.textContent;
      var index = str.indexOf("Details");
      str = str.slice(0, index);
      s += " " + str;
    }
  }
  
  return s;
  
}

var names = getCol("tblgrades", 11);
alert(names);


// adds text before the grades
var testText = $('<p>').text('hello');
//console.log(testText);
//console.log($('.grade-info'));
$('.grade-info').prepend(testText);
