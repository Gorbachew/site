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
price_shack = 1000;
price_stock = 1000;
price_village_head = 1000;
price_pigsty = 1000;
price_field_left = 1000;
price_field_right = 1000;

price_woodcutter = 1000;
price_master_cart = 1000;
price_mill = 1000;
price_forge = 1000;

price_Trade_Shop = 1000;
price_Trade_stock = 1000;
price_Market = 1000;
price_Merchants_Guild_red = 1000;

price_clerk_house= 1000;
price_scientist_house = 1000;
price_writer_house = 1000;
price_library = 1000;

price_strange_hause= 1000;
price_tavern = 1000;
price_sale_hause = 1000;
price_master_thief = 1000;

price_watch_tower= 1000;
price_Checkpoint = 1000;
price_military_camp = 1000;
price_barracks = 1000;

price_north_tower= 1000;
price_ballista = 1000;
price_middle_tower = 1000;
price_guard_boss = 1000;
price_wall = 1000;

price_church= 1000;
price_fane = 1000;
price_hostel = 1000;
price_lavra = 1000;

price_theater= 1000;
price_luxurious_house = 1000;
price_mayor = 1000;
price_residence = 1000;

price_Castle1 = 1000;
price_Castle2 = 1000;
price_Castle3 = 1000;
price_Castle4 = 1000;



$('#build_btn_11').click(buy_shack);
$('#build_btn_12').click(buy_stock);
$('#build_btn_13').click(buy_village_head);
$('#build_btn_14').click(buy_pigsty);
$('#build_btn_15').click(buy_field_left);
$('#build_btn_16').click(buy_field_right);

$('#build_btn_21').click(buy_woodcutter);
$('#build_btn_22').click(buy_master_cart);
$('#build_btn_23').click(buy_mill);
$('#build_btn_24').click(buy_forge);

$('#build_btn_31').click(buy_Trade_Shop);
$('#build_btn_32').click(buy_Trade_stock);
$('#build_btn_33').click(buy_Market);
$('#build_btn_34').click(buy_Merchants_Guild_red);

$('#build_btn_41').click(buy_clerk_house);
$('#build_btn_42').click(buy_scientist_house);
$('#build_btn_43').click(buy_writer_house);
$('#build_btn_44').click(buy_library);

$('#build_btn_51').click(buy_strange_hause);
$('#build_btn_52').click(buy_tavern);
$('#build_btn_53').click(buy_sale_hause);
$('#build_btn_54').click(buy_master_thief);

$('#build_btn_61').click(buy_watch_tower);
$('#build_btn_62').click(buy_Checkpoint);
$('#build_btn_63').click(buy_military_camp);
$('#build_btn_64').click(buy_barracks);

$('#build_btn_71').click(buy_north_tower);
$('#build_btn_72').click(buy_ballista);
$('#build_btn_73').click(buy_middle_tower);
$('#build_btn_74').click(buy_guard_boss);
$('#build_btn_75').click(buy_wall);

$('#build_btn_81').click(buy_fane);
$('#build_btn_82').click(buy_church);
$('#build_btn_83').click(buy_hostel);
$('#build_btn_84').click(buy_lavra);

$('#build_btn_91').click(buy_luxurious_house);
$('#build_btn_92').click(buy_theater);
$('#build_btn_93').click(buy_mayor);
$('#build_btn_94').click(buy_residence);

$('#build_btn_101').click(buy_Castle1);
$('#build_btn_102').click(buy_Castle2);
$('#build_btn_103').click(buy_Castle3);
$('#build_btn_104').click(buy_Castle4);

function buy_shack(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_shack);
  $('#builds').append('<img src="/static/click/img/builds/1shack.gif" id="1shack" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_11').addClass('d-none');
}
function buy_stock(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_stock);
  $('#builds').append('<img src="/static/click/img/builds/1stock.gif" id="1stock" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_12').addClass('d-none');
}
function buy_village_head(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_village_head);
  $('#builds').append('<img src="/static/click/img/builds/1village_head_red.gif" id="1village_head_red" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_13').addClass('d-none');
}
function buy_pigsty(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_pigsty);
  $('#builds').append('<img src="/static/click/img/builds/1pigsty.gif" id="1pigsty" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_14').addClass('d-none');
}
function buy_field_left(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_field_left);
  $('#builds').append('<img src="/static/click/img/builds/1field_left.gif" id="1field_left" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_15').addClass('d-none');
}
function buy_field_right(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_field_right);
  $('#builds').append('<img src="/static/click/img/builds/1field_right.gif" id="1field_right" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_16').addClass('d-none');
}


function buy_woodcutter(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_woodcutter);
  $('#builds').append('<img src="/static/click/img/builds/2woodcutter.gif" id="2woodcutter" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_21').addClass('d-none');
}
function buy_master_cart(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_master_cart);
  $('#builds').append('<img src="/static/click/img/builds/2master_cart.gif" id="2master_cart" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_22').addClass('d-none');
}
function buy_mill(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_mill);
  $('#builds').append('<img src="/static/click/img/builds/2mill.gif" id="2mill" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_23').addClass('d-none');
}
function buy_forge(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_forge);
  $('#builds').append('<img src="/static/click/img/builds/2forge.gif" id="2forge" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_24').addClass('d-none');
}


function buy_Trade_Shop(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_Trade_Shop);
  $('#builds').append('<img src="/static/click/img/builds/3Trade_Shop.gif" id="3Trade_Shop" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_31').addClass('d-none');
}
function buy_Trade_stock(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_Trade_stock);
  $('#builds').append('<img src="/static/click/img/builds/3Trade_stock.gif" id="3Trade_stock" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_32').addClass('d-none');
}
function buy_Market(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_Market);
  $('#builds').append('<img src="/static/click/img/builds/3Market.gif" id="3Market" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_33').addClass('d-none');
}
function buy_Merchants_Guild_red(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_Merchants_Guild_red);
  $('#builds').append('<img src="/static/click/img/builds/3Merchants_Guild_red.gif" id="3Merchants_Guild_red" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_34').addClass('d-none');
}


function buy_clerk_house(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_clerk_house);
  $('#builds').append('<img src="/static/click/img/builds/4clerk_house.gif" id="4clerk_house" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_41').addClass('d-none');
}
function buy_scientist_house(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_scientist_house);
  $('#builds').append('<img src="/static/click/img/builds/4scientist_house.gif" id="4scientist_house" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_42').addClass('d-none');
}
function buy_writer_house(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_writer_house);
  $('#builds').append('<img src="/static/click/img/builds/4writer_house.gif" id="4writer_house" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_43').addClass('d-none');
}
function buy_library(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_library);
  $('#builds').append('<img src="/static/click/img/builds/4library.gif" id="4library" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_44').addClass('d-none');
}


function buy_strange_hause(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_strange_hause);
  $('#builds').append('<img src="/static/click/img/builds/5strange_hause.gif" id="5strange_hause" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_51').addClass('d-none');
}
function buy_tavern(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_tavern);
  $('#builds').append('<img src="/static/click/img/builds/5tavern.gif" id="5tavern" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_52').addClass('d-none');
}
function buy_sale_hause(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_sale_hause);
  $('#builds').append('<img src="/static/click/img/builds/5sale_hause.gif" id="5sale_hause" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_53').addClass('d-none');
}
function buy_master_thief(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_master_thief);
  $('#builds').append('<img src="/static/click/img/builds/5master_thief.gif" id="5master_thief" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_54').addClass('d-none');
}


function buy_watch_tower(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_watch_tower);
  $('#builds').append('<img src="/static/click/img/builds/6watch_tower.gif" id="6watch_tower" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_61').addClass('d-none');
}
function buy_Checkpoint(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_Checkpoint);
  $('#builds').append('<img src="/static/click/img/builds/6Checkpoint.gif" id="6Checkpoint" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_62').addClass('d-none');
}
function buy_military_camp(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_military_camp);
  $('#builds').append('<img src="/static/click/img/builds/6military_camp.gif" id="6military_camp" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_63').addClass('d-none');
}
function buy_barracks(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_barracks);
  $('#builds').append('<img src="/static/click/img/builds/6barracks.gif" id="6barracks" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_64').addClass('d-none');
}




function buy_north_tower(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_north_tower);
  $('#builds').append('<img src="/static/click/img/builds/7north_tower.gif" id="7north_tower" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_71').addClass('d-none');
}
function buy_ballista(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_ballista);
  $('#builds').append('<img src="/static/click/img/builds/7ballista.gif" id="7ballista" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_72').addClass('d-none');
}
function buy_middle_tower(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_middle_tower);
  $('#builds').append('<img src="/static/click/img/builds/7middle_tower.png" id="7middle_tower" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_73').addClass('d-none');
}
function buy_guard_boss(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_guard_boss);
  $('#builds').append('<img src="/static/click/img/builds/7guard_boss.gif" id="7guard_boss" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_74').addClass('d-none');
}
function buy_wall(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_wall);
  $('#builds').append('<img src="/static/click/img/builds/7wall.png" id="7wall" class="background_image zindex2" width="100%" height="100%">');
  save();
$('#build_btn_75').addClass('d-none');
}


function buy_fane(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_fane);
  $('#builds').append('<img src="/static/click/img/builds/8fane.gif" id="8fane" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_81').addClass('d-none');
}
function buy_church(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_church);
  $('#builds').append('<img src="/static/click/img/builds/8church.gif" id="8church" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_82').addClass('d-none');
}
function buy_hostel(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_hostel);
  $('#builds').append('<img src="/static/click/img/builds/8hostel.gif" id="8hostel" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_83').addClass('d-none');
}
function buy_lavra(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_lavra);
  $('#builds').append('<img src="/static/click/img/builds/8lavra.gif" id="8lavra" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_84').addClass('d-none');
}



function buy_luxurious_house(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_luxurious_house);
  $('#builds').append('<img src="/static/click/img/builds/9luxurious_house.gif" id="9luxurious_house" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_91').addClass('d-none');
}
function buy_theater(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_theater);
  $('#builds').append('<img src="/static/click/img/builds/9theater.gif" id="9theater" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_92').addClass('d-none');
}
function buy_mayor(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_mayor);
  $('#builds').append('<img src="/static/click/img/builds/9mayor.gif" id="9mayor" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_93').addClass('d-none');
}
function buy_residence(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_residence);
  $('#builds').append('<img src="/static/click/img/builds/9residence.gif" id="9residence" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_94').addClass('d-none');
}


function buy_Castle1(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_Castle1);
  $('#builds').append('<img src="/static/click/img/builds/10Castle1.gif" id="10Castle1" class="background_image d-none" width="100%" height="100%">');
  save();
$('#build_btn_101').addClass('d-none');
}
function buy_Castle2(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_Castle2);
  $('#builds').append('<img src="/static/click/img/builds/10Castle2.gif" id="10Castle2" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_102').addClass('d-none');
}
function buy_Castle3(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_Castle3);
  $('#builds').append('<img src="/static/click/img/builds/10Castle3.gif" id="10Castle3" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_103').addClass('d-none');
}
function buy_Castle4(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_Castle4);
  $('#builds').append('<img src="/static/click/img/builds/10Castle4.gif" id="10Castle4" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_104').addClass('d-none');
}

// function test_kingdom_color(build){
//   if($('img').is('#Ruined_Castle')){
//     $("#Ruined_Castle").remove();
//   }
//   if (build="castle"){
//     if($('img').is('[name="blue_king"]')){
//       $('#Castle_1lvl').remove();
//       img = '<img src="/static/click/img/builds/castle_1lvl_blue.gif" id="Castle_1lvl" class="background_image" width="100%" height="100%">';
//       $('#builds').prepend(img);
//     }
//     if($('img').is('[name="red_king"]')){
//       $('#Castle_1lvl').remove();
//       img = '<img src="/static/click/img/builds/castle_1lvl_red.gif" id="Castle_1lvl" class="background_image" width="100%" height="100%">';
//       $('#builds').prepend(img);
//     }
//     if($('img').is('[name="black_king"]')){
//       $('#Castle_1lvl').remove();
//       img = '<img src="/static/click/img/builds/castle_1lvl_black.gif" id="Castle_1lvl" class="background_image" width="100%" height="100%">';
//       $('#builds').prepend(img);
//     }
//   }
// }


// Отображение людей
$('#people_peasant').click(
  function buy_people(){
    peasant = $('#peasant_field #peasant').length;
    peasant2 = $('#peasant_field2 #peasant').length;
    if (peasant < 10) {
      peasant += 1;
      img = 'click/img/people/peasant.gif';
      $('#peasant_field').append("<img src='/static/click/img/people/peasant.gif' id='peasant' name = 'peasant' class='background_image worker'>");
    }
    else if (peasant2 < 10) {
      peasant2 += 1;
      $('#peasant_field2').append("<img src='/static/click/img/people/peasant.gif' id='peasant' name = 'peasant' class='background_image worker'>");
    }
  }
)
$('#people_engeneer').click(
  function buy_people(){
    engeneer = $('#engeneer_field #engeneer').length;
    engeneer2 = $('#engeneer_field2 #engeneer').length;
    if (engeneer < 10) {
      engeneer += 1;
      $('#engeneer_field').append("<img src='/static/click/img/people/2engeneer.gif' id='engeneer' name = 'engeneer' class='background_image worker'>");
    }
    else if (engeneer2 < 10) {
      engeneer2 += 1;
      $('#engeneer_field2').append("<img src='/static/click/img/people/2engeneer.gif' id='engeneer' name = 'engeneer' class='background_image worker'>");
    }
  }
)
$('#people_merchant').click(
  function buy_people(){
    merchant = $('#merchant_field #merchant').length;
    merchant2 = $('#merchant_field2 #merchant').length;
    if (merchant < 10) {
      merchant += 1;
      $('#merchant_field').append("<img src='/static/click/img/people/3merchant.gif' id='merchant' name = 'merchant' class='background_image worker'>");
    }
    else if (merchant2 < 10) {
      merchant2 += 1;
      $('#merchant_field2').append("<img src='/static/click/img/people/3merchant.gif' id='merchant' name = 'merchant' class='background_image worker'>");
    }
  }
)
$('#people_scientist').click(
  function buy_people(){
    scientist = $('#scientist_field #scientist').length;
    scientist2 = $('#scientist_field2 #scientist').length;
    if (scientist < 6) {
      scientist += 1;
      $('#scientist_field').append("<img src='/static/click/img/people/scientist.gif' id='scientist' name = 'scientist' class='background_image worker'>");
    }
    else if (scientist2 < 6) {
      scientist2 += 1;
      $('#scientist_field2').append("<img src='/static/click/img/people/scientist.gif' id='scientist' name = 'scientist' class='background_image worker'>");
    }
  }
)
$('#people_thief').click(
  function buy_people(){
    thief = $('#thief_field #thief').length;
    thief2 = $('#thief_field2 #thief').length;
    if (thief < 6) {
      thief += 1;
      $('#thief_field').append("<img src='/static/click/img/people/thief.gif' id='thief' name = 'thief' class='background_image worker'>");
    }
    else if (thief2 < 6) {
      thief2 += 1;
      $('#thief_field2').append("<img src='/static/click/img/people/thief.gif' id='thief' name = 'thief' class='background_image worker'>");
    }
  }
)

$('#people_footer').click(
  function buy_people(){
    footer = $('#footer_field #footer').length;
    footer2 = $('#footer_field2 #footer').length;
    if (footer < 40) {
      footer += 1;
      $('#footer_field').append("<img src='/static/click/img/people/footer.gif' id='footer' name = 'footer' class='background_image worker'>");
    }
    else if (footer2 < 40) {
      footer2 += 1;
      $('#footer_field2').append("<img src='/static/click/img/people/footer.gif' id='footer' name = 'footer' class='background_image worker'>");
    }
  }
)

$('#people_archer').click(
  function buy_people(){
    archer = $('#archer_field #archer').length;
    archer2 = $('#archer_field2 #archer').length;
    if (archer < 14) {
      archer += 1;
      $('#archer_field').append("<img src='/static/click/img/people/archer.gif' id='archer' name = 'archer' class='background_image worker'>");
    }
    else if (archer2 < 14) {
      archer2 += 1;
      $('#archer_field2').append("<img src='/static/click/img/people/archer.gif' id='archer' name = 'archer' class='background_image worker'>");
    }
  }
)

$('#people_monk').click(
  function buy_people(){
    monk = $('#monk_field #monk').length;
    monk2 = $('#monk_field2 #monk').length;
    if (monk < 15) {
      monk += 1;
      $('#monk_field').append("<img src='/static/click/img/people/monk.gif' id='monk' name = 'monk' class='background_image worker'>");
    }
    else if (monk2 < 15) {
      monk2 += 1;
      $('#monk_field2').append("<img src='/static/click/img/people/monk.gif' id='monk' name = 'monk' class='background_image worker'>");
    }
  }
)

$('#people_rich').click(
  function buy_people(){
    rich = $('#rich_field #rich').length;
    rich2 = $('#rich_field2 #rich').length;
    if (rich < 15) {
      rich += 1;
      $('#rich_field').append("<img src='/static/click/img/people/rich.gif' id='rich' name = 'rich' class='background_image worker'>");
    }
    else if (rich2 < 15) {
      rich2 += 1;
      $('#rich_field2').append("<img src='/static/click/img/people/rich.gif' id='rich' name = 'rich' class='background_image worker'>");
    }
  }
)


// Функция составления данных для отправки в БД по поводу Зданий
function check_builds(){
  builds11 = $('img').is('#1shack'); builds12 = $('img').is('#1stock');   builds13 = $('img').is('#1village_head_red'); builds14 = $('img').is('#1pigsty'); builds15 = $('img').is('#1field_left'); builds16 = $('img').is('#1field_right');
  builds21 = $('img').is('#2master_cart'); builds22 = $('img').is('#2forge');   builds23 = $('img').is('#2mill'); builds24 = $('img').is('#2woodcutter');
  builds31 = $('img').is('#3Trade_Shop'); builds32 = $('img').is('#3Market');   builds33 = $('img').is('#3Merchants_Guild_red'); builds34 = $('img').is('#3Trade_stock');
  builds41 = $('img').is('#4clerk_house'); builds42 = $('img').is('#4library');   builds43 = $('img').is('#4scientist_house'); builds44 = $('img').is('#4writer_house');
  builds51 = $('img').is('#5master_thief'); builds52 = $('img').is('#5sale_hause');   builds53 = $('img').is('#5strange_hause'); builds54 = $('img').is('#5tavern');
  builds61 = $('img').is('#6watch_tower'); builds62 = $('img').is('#6Checkpoint');   builds63 = $('img').is('#6barracks'); builds64 = $('img').is('#6military_camp');
  builds71 = $('img').is('#7middle_tower'); builds72 = $('img').is('#7guard_boss');   builds73 = $('img').is('#7ballista'); builds74 = $('img').is('#7north_tower');  builds75 = $('img').is('#7wall');
  builds81 = $('img').is('#8church'); builds82 = $('img').is('#8fane');   builds83 = $('img').is('#8hostel'); builds84 = $('img').is('#8lavra');
  builds91 = $('img').is('#9theater'); builds92 = $('img').is('#9luxurious_house');   builds93 = $('img').is('#9mayor'); builds94 = $('img').is('#9residence');
  builds101 = $('img').is('#10Castle1'); builds102 = $('img').is('#10Castle2');   builds103 = $('img').is('#10Castle3'); builds104 = $('img').is('#10Castle4');

  logic11 = +builds11;logic12 = +builds12;logic13 = +builds13;logic14 = +builds14;logic15 = +builds15;logic16 = +builds16;
  logic21 = +builds21;logic22 = +builds22;logic23 = +builds23;logic24 = +builds24;
  logic31 = +builds31;logic32 = +builds32;logic33 = +builds33;logic34 = +builds34;
  logic41 = +builds41;logic42 = +builds42;logic43 = +builds43;logic44 = +builds44;
  logic51 = +builds51;logic52 = +builds52;logic53 = +builds53;logic54 = +builds54;
  logic61 = +builds61;logic62 = +builds62;logic63 = +builds63;logic64 = +builds64;
  logic71 = +builds71;logic72 = +builds72;logic73 = +builds73;logic74 = +builds74;logic75 = +builds75;
  logic81 = +builds81;logic82 = +builds82;logic83 = +builds83;logic84 = +builds84;
  logic91 = +builds91;logic92 = +builds92;logic93 = +builds93;logic94 = +builds94;
  logic101 = +builds101;logic102 = +builds102;logic103 = +builds103;logic104 = +builds104;

  result_for_save_builds =  logic11.toString() + logic12.toString() + logic13.toString() + logic14.toString() + logic15.toString() + logic16.toString() +
            logic21.toString() + logic22.toString() + logic23.toString() + logic24.toString() +
            logic31.toString() + logic32.toString() + logic33.toString() + logic34.toString() +
            logic41.toString() + logic42.toString() + logic43.toString() + logic44.toString() +
            logic51.toString() + logic52.toString() + logic53.toString() + logic54.toString() +
            logic61.toString() + logic62.toString() + logic63.toString() + logic64.toString() +
            logic71.toString() + logic72.toString() + logic73.toString() + logic74.toString() +logic75.toString() +
            logic81.toString() + logic82.toString() + logic83.toString() + logic84.toString() +
            logic91.toString() + logic92.toString() + logic93.toString() + logic94.toString() +
            logic101.toString() + logic102.toString() + logic103.toString() + logic104.toString();

  // alert(result_for_save_builds);
}
check_builds();

function display_builds(){
  score_builds = $('#score_builds').html();
  parse_builds = score_builds.split('');
  console.log(parse_builds[18]);
  if (parse_builds[0] == '1'){$('#builds').append('<img src="/static/click/img/builds/1shack.gif" id="1shack" class="background_image" width="100%" height="100%">'); $('#build_btn_11').addClass('d-none');}
  if (parse_builds[1] == '1'){$('#builds').append('<img src="/static/click/img/builds/1stock.gif" id="1stock" class="background_image" width="100%" height="100%">'); $('#build_btn_12').addClass('d-none');}
  if (parse_builds[2] == '1'){$('#builds').append('<img src="/static/click/img/builds/1village_head_red.gif" id="1village_head_red" class="background_image" width="100%" height="100%">'); $('#build_btn_13').addClass('d-none');}
  if (parse_builds[3] == '1'){$('#builds').append('<img src="/static/click/img/builds/1pigsty.gif" id="1pigsty" class="background_image" width="100%" height="100%">'); $('#build_btn_14').addClass('d-none');}
  if (parse_builds[4] == '1'){$('#builds').append('<img src="/static/click/img/builds/1field_left.gif" id="1field_left" class="background_image" width="100%" height="100%">'); $('#build_btn_15').addClass('d-none');}
  if (parse_builds[5] == '1'){$('#builds').append('<img src="/static/click/img/builds/1field_right.gif" id="1field_right" class="background_image" width="100%" height="100%">'); $('#build_btn_16').addClass('d-none');}
  if (parse_builds[9] == '1'){$('#builds').append('<img src="/static/click/img/builds/2woodcutter.gif" id="2woodcutter" class="background_image" width="100%" height="100%">'); $('#build_btn_21').addClass('d-none');}
  if (parse_builds[7] == '1'){$('#builds').append('<img src="/static/click/img/builds/2master_cart.gif" id="2master_cart" class="background_image" width="100%" height="100%">'); $('#build_btn_22').addClass('d-none');}
  if (parse_builds[6] == '1'){$('#builds').append('<img src="/static/click/img/builds/2mill.gif" id="2mill" class="background_image" width="100%" height="100%">'); $('#build_btn_23').addClass('d-none');}
  if (parse_builds[8] == '1'){$('#builds').append('<img src="/static/click/img/builds/2forge.gif" id="2forge" class="background_image" width="100%" height="100%">'); $('#build_btn_24').addClass('d-none');}
  if (parse_builds[10] == '1'){$('#builds').append('<img src="/static/click/img/builds/3Trade_Shop.gif" id="3Trade_Shop" class="background_image" width="100%" height="100%">'); $('#build_btn_31').addClass('d-none');}
  if (parse_builds[13] == '1'){$('#builds').append('<img src="/static/click/img/builds/3Trade_stock.gif" id="3Trade_stock" class="background_image" width="100%" height="100%">'); $('#build_btn_32').addClass('d-none');}
  if (parse_builds[11] == '1'){$('#builds').append('<img src="/static/click/img/builds/3Market.gif" id="3Market" class="background_image" width="100%" height="100%">'); $('#build_btn_33').addClass('d-none');}
  if (parse_builds[12] == '1'){$('#builds').append('<img src="/static/click/img/builds/3Merchants_Guild_red.gif" id="3Merchants_Guild_red" class="background_image" width="100%" height="100%">'); $('#build_btn_34').addClass('d-none');}
  if (parse_builds[14] == '1'){$('#builds').append('<img src="/static/click/img/builds/4clerk_house.gif" id="4clerk_house" class="background_image zindex2" width="100%" height="100%">'); $('#build_btn_41').addClass('d-none');}
  if (parse_builds[16] == '1'){$('#builds').append('<img src="/static/click/img/builds/4scientist_house.gif" id="4scientist_house" class="background_image zindex2" width="100%" height="100%">'); $('#build_btn_42').addClass('d-none');}
  if (parse_builds[17] == '1'){$('#builds').append('<img src="/static/click/img/builds/4writer_house.gif" id="4writer_house" class="background_image zindex2" width="100%" height="100%">'); $('#build_btn_43').addClass('d-none');}
  if (parse_builds[15] == '1'){$('#builds').append('<img src="/static/click/img/builds/4library.gif" id="4library" class="background_image zindex2" width="100%" height="100%">'); $('#build_btn_44').addClass('d-none');}
  if (parse_builds[20] == '1'){$('#builds').append('<img src="/static/click/img/builds/5strange_hause.gif" id="5strange_hause" class="background_image zindex2" width="100%" height="100%">');}
  if (parse_builds[21] == '1'){$('#builds').append('<img src="/static/click/img/builds/5tavern.gif" id="5tavern" class="background_image zindex2" width="100%" height="100%">');}
  if (parse_builds[19] == '1'){$('#builds').append('<img src="/static/click/img/builds/5sale_hause.gif" id="5sale_hause" class="background_image zindex2" width="100%" height="100%">');}
  if (parse_builds[18] == '1'){$('#builds').append('<img src="/static/click/img/builds/5master_thief.gif" id="5master_thief" class="background_image zindex2" width="100%" height="100%">');}
  if (parse_builds[22] == '1'){$('#builds').append('<img src="/static/click/img/builds/6watch_tower.gif" id="6watch_tower" class="background_image" width="100%" height="100%">');}
  if (parse_builds[23] == '1'){$('#builds').append('<img src="/static/click/img/builds/6Checkpoint.gif" id="6Checkpoint" class="background_image" width="100%" height="100%">');}
  if (parse_builds[25] == '1'){$('#builds').append('<img src="/static/click/img/builds/6military_camp.gif" id="6military_camp" class="background_image" width="100%" height="100%">');}
  if (parse_builds[24] == '1'){$('#builds').append('<img src="/static/click/img/builds/6barracks.gif" id="6barracks" class="background_image" width="100%" height="100%">');}
  if (parse_builds[26] == '1'){}
}

function buy_watch_tower(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_watch_tower);
  $('#builds').append('<img src="/static/click/img/builds/6watch_tower.gif" id="6watch_tower" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_61').addClass('d-none');
}
function buy_Checkpoint(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_Checkpoint);
  $('#builds').append('<img src="/static/click/img/builds/6Checkpoint.gif" id="6Checkpoint" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_62').addClass('d-none');
}
function buy_military_camp(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_military_camp);
  $('#builds').append('<img src="/static/click/img/builds/6military_camp.gif" id="6military_camp" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_63').addClass('d-none');
}
function buy_barracks(){
  check('score');
  score = $('#score').html();
  $('#score').html(score - price_barracks);
  $('#builds').append('<img src="/static/click/img/builds/6barracks.gif" id="6barracks" class="background_image" width="100%" height="100%">');
  save();
$('#build_btn_64').addClass('d-none');
}
// $('#score').click(check_builds); проверял сохранение зданий



// Отображение зданий
// $("#build_btn_11").click(function close_object(){$("#1shack").toggleClass("d-none");});
// $("#build_btn_12").click(function close_object(){$("#1stock").toggleClass("d-none");});
// $("#build_btn_13").click(function close_object(){$("#1village_head_red").toggleClass("d-none");});
// $("#build_btn_14").click(function close_object(){$("#1pigsty").toggleClass("d-none");});
//
// $("#build_btn_21").click(function close_object(){$("#2woodcutter").toggleClass("d-none");});
// $("#build_btn_22").click(function close_object(){$("#2master_cart").toggleClass("d-none");});
// $("#build_btn_23").click(function close_object(){$("#2mill").toggleClass("d-none");});
// $("#build_btn_24").click(function close_object(){$("#2forge").toggleClass("d-none");});
//
// $("#build_btn_31").click(function close_object(){$("#3Trade_Shop").toggleClass("d-none");});
// $("#build_btn_32").click(function close_object(){$("#3Trade_stock").toggleClass("d-none");});
// $("#build_btn_33").click(function close_object(){$("#3Market").toggleClass("d-none");});
// $("#build_btn_34").click(function close_object(){$("#3Merchants_Guild_red").toggleClass("d-none");});
//
// $("#build_btn_41").click(function close_object(){$("#4clerk_house").toggleClass("d-none");});
// $("#build_btn_42").click(function close_object(){$("#4scientist_house").toggleClass("d-none");});
// $("#build_btn_43").click(function close_object(){$("#4writer_house").toggleClass("d-none");});
// $("#build_btn_44").click(function close_object(){$("#4library").toggleClass("d-none");});
//
// $("#build_btn_51").click(function close_object(){$("#5strange_hause").toggleClass("d-none");});
// $("#build_btn_52").click(function close_object(){$("#5tavern").toggleClass("d-none");});
// $("#build_btn_53").click(function close_object(){$("#5sale_hause").toggleClass("d-none");});
// $("#build_btn_54").click(function close_object(){$("#5master_thief").toggleClass("d-none");});
//
// $("#build_btn_61").click(function close_object(){$("#6watch_tower").toggleClass("d-none");});
// $("#build_btn_62").click(function close_object(){$("#6Checkpoint").toggleClass("d-none");});
// $("#build_btn_63").click(function close_object(){$("#6military_camp").toggleClass("d-none");});
// $("#build_btn_64").click(function close_object(){$("#6barracks").toggleClass("d-none");});
//
// $("#build_btn_71").click(function close_object(){$("#7north_tower").toggleClass("d-none");});
// $("#build_btn_72").click(function close_object(){$("#7ballista").toggleClass("d-none");});
// $("#build_btn_73").click(function close_object(){$("#7middle_tower").toggleClass("d-none");});
// $("#build_btn_74").click(function close_object(){$("#7guard_boss").toggleClass("d-none");});
// $("#build_btn_75").click(function close_object(){$("#7wall").toggleClass("d-none");});
//
// $("#build_btn_81").click(function close_object(){$("#8fane").toggleClass("d-none");});
// $("#build_btn_82").click(function close_object(){$("#8church").toggleClass("d-none");});
// $("#build_btn_83").click(function close_object(){$("#8hostel").toggleClass("d-none");});
// $("#build_btn_84").click(function close_object(){$("#8lavra").toggleClass("d-none");});
//
// $("#build_btn_91").click(function close_object(){$("#9luxurious_house").toggleClass("d-none");});
// $("#build_btn_92").click(function close_object(){$("#9theater").toggleClass("d-none");});
// $("#build_btn_93").click(function close_object(){$("#9mayor").toggleClass("d-none");});
// $("#build_btn_94").click(function close_object(){$("#9residence").toggleClass("d-none");});
//
// $("#build_btn_101").click(function close_object(){$("#10Castle1").toggleClass("d-none");});
// $("#build_btn_102").click(function close_object(){$("#10Castle2").toggleClass("d-none");});
// $("#build_btn_103").click(function close_object(){$("#10Castle3").toggleClass("d-none");});
// $("#build_btn_104").click(function close_object(){$("#10Castle4").toggleClass("d-none");});
