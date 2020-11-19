function myFunction(){

  aa = jQuery('a');
  pt = jQuery('p');
  for(var i=1; i<5; i++){
    $(aa[i]).css("color", "#ff0000");
    $(aa[i]).css("text-decoration", "none");
  }

 for(var i=0; i<4; i++){
    $(pt[i]).hover(function(){
     $(this).css("background-color", "rgb(191, 240, 176)");
    },
    function(){
    $(this).css("background-color", "#ffffff");
    });
    $(pt[i]).css("position", "absolute ");
    $(pt[i]).css("width"," 120px ");
    $(pt[i]).css("border","4px solid rgb(191, 240, 176)");
    $(pt[i]).css("padding-left", "35px");
  }

  $(aa[0]).offset({
     left : 40,
     top : 185
});
  
  $(aa[1]).offset({
     left : 40,
     top : 200
});
 $(aa[2]).offset({
     left : 40,
     top : 300
});
 $(aa[3]).offset({
     left : 40,
     top : 400
});
 $(aa[4]).offset({
     left : 40,
     top : 500
});
}

