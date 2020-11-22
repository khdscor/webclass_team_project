function myFunction(){

  aa = jQuery('a');
  pt = jQuery('p');
  for(var i=1; i<5; i++){
    $(aa[i]).css("color", "#ff0000");
    $(aa[i]).css("text-decoration", "none");
    $(aa[i]).css("font-size", "30px");
    $(aa[i]).css("font-weight", "700");
  }
 for(var i=0; i<4; i++){
    $(pt[i]).hover(function(){
     $(this).css("background-color", "rgb(191, 240, 176)");
    },
    function(){
    $(this).css("background-color", "#ffffff");
    });
    $(pt[i]).css("position", "absolute ");
    $(pt[i]).css("width"," 180px ");
    $(pt[i]).css("height"," 70px ");
    $(pt[i]).css("border","5px solid rgb(191, 240, 176)");
    $(pt[i]).css("padding-left", "40px");
    $(pt[i]).css("padding-top", "12px");
    $(pt[i]).css("border-radius", "30px");
  }

  $(aa[0]).offset({
     left : 40,
     top : 100
});
  
  $(aa[1]).offset({
     left : 40,
     top : 210
});
 $(aa[2]).offset({
     left : 40,
     top : 300
});
 $(aa[3]).offset({
     left : 40,
     top : 390
});
 $(aa[4]).offset({
     left : 30,
     top : 470
});
}

