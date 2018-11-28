// ==UserScript==
// @name          checkgrades
// @namespace     http://github.com/ingrahamgwc
// @description   check your grades
// @grant         GM.setValue
// @grant         GM.getValue
// @include       https://ps.seattleschools.org/guardian/home.html
// ==/UserScript==

//make function that loops through to find value of columns and returns as an array (?)


class Grade {
  //constructor sets name
  constructor(name, grd, per){
    this.name = name; 
    this.grade = grd;
    this.percentage = per;
  }
  //changes grade 
  changeGrade(ngrd) {
    this.grade = ngrd;
  }
  
  changePercentage(nper) {
    this.percentage = per;
  }
 
}

//elementlist - collection of all tabledata objects
var elementlist = document.getElementsByTagName("td");


//getCol - takes table id, and column value and returns array of strings with content

function getCol(tableid, col) {
  var table = document.getElementById(tableid);
  var n = table.rows.length;
  var s = new Array();
  
  for (var i = 3; i < n; i++){
    var tr = table.rows[i];
    if (tr.cells.length > col){
      var td = tr.cells[col];
      var str = td.textContent;
      
      s.push(str);
      
      //var index = str.indexOf("Details");
      //str = str.slice(0, index);
      //s += " " + str;
    }
  }
  
  return s;
  
}

//function titlesplice takes an array and finds the segment from the 
//beginning to the phrase passed as as a parameter, returns array of spliced values


function titleSplice(arr, phrase) {
  console.log("array length " + arr.length);
  for (var i = 0; i < arr.length; i++) {
    temp = arr[i];
    index = temp.indexOf(phrase);
    
    if (index > 0) {
      
    	temp = temp.slice(0, index);
      
    }
    console.log(temp);
    arr[i] = temp;
  }
  return arr;
}

var names = getCol("tblgrades", 11);
names = titleSplice(names, "Details");
alert(names);


var grades = getCol("tblgrades", 12)
alert(grades);


// adds text before the grades
//var testText = $('<p>').text('hello');
//console.log(testText);
//console.log($('.grade-info'));
//$('.grade-info').prepend(testText);

GM.setValue("hello", "hi");

(async () => {
  let count_before = await GM.getValue('hello');
  console.log(count_before);

  // Note awaiting the set -- required so the next get sees this set.
  await GM.setValue('hello', "what's up");

  // Get the value again, just to demonstrate order-of-operations.
  let count_after = await GM.getValue('hello');

  console.log('Greasemonkey set-and-get Example has run', count_after, 'times');
})();
