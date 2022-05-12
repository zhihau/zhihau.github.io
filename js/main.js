$(document).ready(function(){
  $("#search-box").hide();

  $("#search-button").click(function(){
    $("#search-box").toggle();
    $("#copy-link-button").toggle();
    $("#about-button").toggle();
    $("#projects-button").toggle();
    $("#search-box-input").focus();
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
  /*$(".fb-share-button").click(function(){
	  console.log("1:"+$(".fb-share-button>a").css("href"));
	  $(".fb-share-button>a").css("href",window.location.href);
	  console.log("2:"+$(".fb-share-button>a").css("href"));
  });*/
});
