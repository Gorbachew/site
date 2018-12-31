$("#check_ruined_castle").change(
  function close_object(){
    $("#Ruined_Castle").toggleClass("d-none");
  }
);
$("#check_ruineds_wall").change(
  function close_object(){
    $("#ruined_tower1").toggleClass("d-none");
    $("#ruined_wall").toggleClass("d-none");
  }
);

$("#check_ruined_deffence_castle").change(
  function close_object(){
    $("#ruined_tower2").toggleClass("d-none");
    $("#ruined_wall2").toggleClass("d-none");
  }
);
$("#check_ruined_bridge1").change(
  function close_object(){
    $("#ruined_bridge").toggleClass("d-none");
  }
);
$("#check_ruined_bridge2").change(
  function close_object(){
    $("#ruined_bridge2").toggleClass("d-none");
  }
);
$("#check_ruined_stock").change(
  function close_object(){
    $("#ruined_stock").toggleClass("d-none");
  }
);
$("#check_ruined_houses").change(
  function close_object(){
    $("#ruined_house1").toggleClass("d-none");
    $("#ruined_house2").toggleClass("d-none");
  }
);

$("input[name='radio_king']").on("click",
  function choice_king(){
    // alert($("input[name='radio_king']:focus").attr("id"));
    number_king = $("input[name='radio_king']:focus").attr("id")
    if (number_king == 'radio_king1'){
      $("#king_anim").attr("src","/static/click/img/people/king1.gif").attr('name','blue_king');
    }
    if (number_king == 'radio_king2'){
      $("#king_anim").attr("src","/static/click/img/people/king2.gif").attr('name','red_king');
    }
    if (number_king == 'radio_king3'){
      $("#king_anim").attr("src","/static/click/img/people/king3.gif").attr('name','black_king');
    }
    test_kingdom_color(castle);
  }
);

$("#check_castle").change(
  function open_object(){
    if ($('img').is('#Castle_1lvl')){
      $('#Castle_1lvl').remove();
      img = '<img src="/static/click/img/builds/ruined/Ruined_Castle.gif" id = "Ruined_Castle" class="background_image" width="100%" height="100%">';
      $('#ruined_builds').prepend(img);
    }
    else{
      $("#Ruined_Castle").remove();
      test_kingdom_color(castle);
    }
  }
);

function test_kingdom_color(build){
  if($('img').is('#Ruined_Castle')){
    $("#Ruined_Castle").remove();
  }
  if (build="castle"){
    if($('img').is('[name="blue_king"]')){
      $('#Castle_1lvl').remove();
      img = '<img src="/static/click/img/builds/castle_1lvl_blue.gif" id="Castle_1lvl" class="background_image" width="100%" height="100%">';
      $('#builds').prepend(img);
    }
    if($('img').is('[name="red_king"]')){
      $('#Castle_1lvl').remove();
      img = '<img src="/static/click/img/builds/castle_1lvl_red.gif" id="Castle_1lvl" class="background_image" width="100%" height="100%">';
      $('#builds').prepend(img);
    }
    if($('img').is('[name="black_king"]')){
      $('#Castle_1lvl').remove();
      img = '<img src="/static/click/img/builds/castle_1lvl_black.gif" id="Castle_1lvl" class="background_image" width="100%" height="100%">';
      $('#builds').prepend(img);
    }
  }
}
