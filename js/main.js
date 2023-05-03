
//elements=document.querySelectorAll('code:not(.hljs)');
////console.log(elements);
////elements=document.getElementsByTagName("code");
// //   if(elements.length==0) return;
////console.log(elements.length);
//for(var i=0;i<elements.length;i++){
//    var code=elements[i].innerText;
//    code=code.replace(/ +/g,' ');//replace multiple space to one
//    parts=(code.indexOf(" ")>-1)?code.split (" "):[code];
//    parts[0]='<span style="color:lime;font-weight:bolder">'+parts[0]+'</span>';
//    var code_color=[
//    "#FF355E",
//    "#FF00CC",
//    "#EE34D2",
//    "#FF6EFF",
//    "#FF9933",
//    "#FFCC33",
//    "#FFFF66",
//    "#FFFF66",
//    "#CCFF00",
//    "#66FF66",
//    "#AAF0D1",
//    "#50BFE6",
//    "#FF9966",
//    "#FF6037",
//    "#FD5B78",
//    "#FF00CC"
//    ];
//    for(var j=1;j<parts.length;j++){
//        var code_color_index=j-1;
//        if(code_color_index>=code_color.length){
//            console.log("xxx");
//            code_color_index=j-(code_color.length+1);
//        }
//        //console.log(j);
//        //console.log(parts[j]);
//        //console.log(code_color_index);
//        parts[j]='<span style="color:'+((code_color[code_color_index]==undefined)?code_color[code_color.length-1]:code_color[code_color_index])+';">'+parts[j]+'</span>';
//    }
//    elements[i].innerHTML=parts.join(" ");
//    elements[i].setAttribute("style","background:black;padding-right: 8px;padding-left: 8px;border-radius: 10px;");
//
//}
//console.log(parts.join(" "));
//document.getElementById("result").innerText=parts.join(" ");

// Get the search box element
var searchBox = document.getElementById("search-box");

let suggestions = document.getElementById("suggestions");
//let suggestionList = ["(1) apple", "(2) appop","banana", "orange", "grape"];


searchBox.addEventListener("input", function() {
  // Clear any previous suggestions
  suggestions.innerHTML = "";
let inputValue ="";
    let appendTextToSearhBox=false;
  // Get the input value
    if (this.value.lastIndexOf(' ')>-1){//==this.value.length-1){
   // appendTextToSearhBox=true;
  inputValue = this.value.substring(this.value.lastIndexOf(' ')+1);
    }else{
  inputValue = this.value;
    }
    console.log(appendTextToSearhBox);

  // Create a new list of suggestions
  let newSuggestions = suggestionList.filter(function(suggestion) {
    //return suggestion.startsWith(inputValue);
    return suggestion.indexOf(inputValue)>-1;
  });

  // Add the new suggestions to the suggestions div
  newSuggestions.forEach(function(suggestion) {
    let suggestionElement = document.createElement("div");
    let tag=suggestion.split(' ')[1]
    suggestionElement.innerHTML = "<a href='../tags/"+tag+".html'>"+suggestion+"</a>";
    suggestions.appendChild(suggestionElement);
     // if(!appendTextToSearhBox){
     //     let startIndex=suggestions.innerText.indexOf(searchBox.value)+1;
     // searchBox.value+=suggestions.innerText.substring(startIndex);
     //     appendTextToSearhBox=true;
     // }
  });
});

searchBox.addEventListener("keydown", function(event) {
  let selectedSuggestion = suggestions.querySelector(".selected");

  if (event.keyCode === 40) { //down arrow key
    if (selectedSuggestion) {
        if(selectedSuggestion.nextSibling!=null){
      selectedSuggestion.nextSibling.classList.add("selected");

      selectedSuggestion.classList.remove("selected");
        }
    } else {
      suggestions.firstChild.classList.add("selected");
    }
  } else if (event.keyCode === 38) { //up arrow key
    if (selectedSuggestion) {
      selectedSuggestion.previousSibling.classList.add("selected");
      selectedSuggestion.classList.remove("selected");
    } else {
      suggestions.lastChild.classList.add("selected");
    }
  } else if (event.keyCode === 13) { // enter key
    if (selectedSuggestion) {
      searchBox.value = selectedSuggestion.innerHTML;
      suggestions.innerHTML = "";
    }
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "/") { // "s" is the key that triggers the search box
    event.preventDefault(); // Prevent the default action of the Enter key (e.g. submitting a form)
    searchBox.focus();
  }
  else  if (event.key === "Escape") {
    event.preventDefault(); 
    //searchBox.blur();
    searchBox.value="";
    suggestions.innerHTML = "";
  }
});
