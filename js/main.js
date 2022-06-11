$(document).ready(function(){
  $("#font-size-bar").hide();

  $("#font-size-btn").click(function(){
      $("#font-size-bar").toggle();
  });

  $("#copy-link-button").click(function(){
	var dummy = document.createElement('input'),
	    text = window.location.href;

	document.body.appendChild(dummy);
	dummy.value = text;
	dummy.select();
	document.execCommand('copy');
	document.body.removeChild(dummy);
  });
  $(".font-size-button").click(function(){
      
    $(".content").first().css("font-size",$(this).text()+"px");
    localStorage.setItem("fontsize", $(this).text());
  });

    function initialFontSize(){
        if(localStorage.getItem("fontsize")!=undefined)
            $(".content").first().css("font-size",localStorage.getItem("fontsize")+"px");
    }
    initialFontSize();

  $("img").click(function(){//click image to maximize height of image
      var attr = $(this).attr('height');
    // For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
    if (typeof attr !== typeof undefined && attr !== false) {
      // Element has this attribute
    }else{
      $(this).attr('height',$(this).prop("naturalHeight"));
      $(this).attr('width',$(this).prop("naturalWidth"));
    }
    $(this).toggleClass("w3-image");
  });

  /*$(".fb-share-button").click(function(){
	  console.log("1:"+$(".fb-share-button>a").css("href"));
	  $(".fb-share-button>a").css("href",window.location.href);
	  console.log("2:"+$(".fb-share-button>a").css("href"));
  });*/

function beautyTable(){
    elements=document.querySelectorAll('table');
    for(var i=0;i<elements.length;i++){
        elements[i].setAttribute("class","w3-table-all w3-hoverable");
    }
} 
beautyTable();

function beautyImage(){
    elements=document.querySelectorAll('img');
    for(var i=0;i<elements.length;i++){
        elements[i].setAttribute("class","w3-image w3-border");
    }
} 
beautyImage();

function setCodeSyntaxColor(){
    elements=document.querySelectorAll('code:not(.hljs)');
    if(elements.length==0) return;
    for(var i=0;i<elements.length;i++){
        var code=elements[i].innerText;
        code=code.replace(/ +/g,' ');//replace multiple space to one
        parts=(code.indexOf(" ")>-1)?code.split (" "):[code];
        parts[0]='<span style="color:lime;font-weight:bolder">'+parts[0]+'</span>';
        var code_color=[
    "#FF355E",
    "#FF00CC",
    "#EE34D2",
    "#FF6EFF",
    "#FF9933",
    "#FFCC33",
    "#FFFF66",
    "#FFFF66",
    "#CCFF00",
    "#66FF66",
    "#AAF0D1",
    "#50BFE6",
    "#FF9966",
    "#FF6037",
    "#FD5B78",
    "#FF00CC"
        ];
        for(var j=1;j<parts.length;j++){
            var code_color_index=j-1;
            if(code_color_index>=code_color.length){
                console.log("xxx");
                code_color_index=j-(code_color.length+1);
            }
            console.log(j);
            console.log(parts[j]);
            console.log(code_color_index);
            parts[j]='<span style="color:'+((code_color[code_color_index]==undefined)?code_color[code_color.length-1]:code_color[code_color_index])+';">'+parts[j]+'</span>';
        }
        elements[i].innerHTML=parts.join(" ");
        elements[i].setAttribute("style","background:black;padding-right: 8px;padding-left: 8px;border-radius: 10px;");

    }
    return;
}
setCodeSyntaxColor();
});
