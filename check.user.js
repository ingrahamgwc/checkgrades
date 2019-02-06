// ==UserScript==
// @name          checkgrades
// @namespace     http://github.com/ingrahamgwc
// @description   check your grades
// @include       https://ps.seattleschools.org/guardian/home.html
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant         GM.setValue
// @grant         GM.getValue
// @grant         GM.listValues
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
  
  equals(other) {
    
  }
 
}

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


function titleSplice(arr, phrase, front) {
  console.log("array length " + arr.length);
  for (var i = 0; i < arr.length; i++) {
    temp = arr[i];
    index = temp.indexOf(phrase);
    
    if (front && index > 0) {
      
    	temp = temp.slice(0, index);
      
    } else if (!front && index > 0) {
      temp = temp.slice(index, temp.length-1);
    }
    console.log(temp);
    arr[i] = temp;
  }
  return arr;
}


async function getGrades() {
  var temp = await GM.getValue("noogrd", -1);
  if (temp != -1) {
    return temp;
  } else {
    return false; 
  }
}

//adds text before the grades                            
async function addTextToPage(){
  var testText = $('<p>').text(await getGrades());
  console.log(testText);
  console.log($('.grade-info'));
  $('.grade-info').prepend(testText);
}


function openNewPages() {
  var links = document.getElementsByTagName("a");
  for (i in links) {
    var href = links[i].href;
    if (href.toLowerCase().indexOf("scores.html") > -1){
      window.open(links[i].href);
    }
  }
}
  
//takes in the values for the names and the grades, and creates grade objects 
function createGradeObjects(){
  
}


//elementlist - collection of all tabledata objects
var elementlist = document.getElementsByTagName("td");

//names - collection of all school class names
var names = getCol("tblgrades", 11);
names = titleSplice(names, "Details", true);
alert(names);

//grades - collection of all grades for school classes
var grades = getCol("tblgrades", 13);
alert(grades);

addTextToPage();

openNewPages();

//GM.setValue("noogrd", grades);



GM.setValue("hello", "hi");

async function setGrades(){
  GM.setValue("oldgrds", grades);
}

async function getGrades() {
  var temp = await GM.getValue("oldgrds", -1);
  if (temp != -1) {
    return temp;
  } else {
    return false; 
  }
}






