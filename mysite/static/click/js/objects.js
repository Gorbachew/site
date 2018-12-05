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
