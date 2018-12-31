$('#switch_builds').click(
  function open_builds(){
  $('#menu_builds').removeClass('d-none');
  $('#people').addClass('d-none');
  $('#upgrades').addClass('d-none');
}
);
$('#switch_peoples').click(
  function open_peoples(){
  $('#menu_builds').addClass('d-none');
  $('#people').removeClass('d-none');
  $('#upgrades').addClass('d-none');
}
);
$('#switch_upgrades').click(
  function open_upgrades(){
  $('#menu_builds').addClass('d-none');
  $('#people').addClass('d-none');
  $('#upgrades').removeClass('d-none');
}
);
$('#open_second_menu').click(
  function open_second_menu(){
    $('#second_menu').animate({'margin-left': "0%"}, 500);
  }
);
$('#close_second_menu').click(
  function close_second_menu(){
    $('#second_menu').animate({'margin-left': "100%"},500);
  }
)

// Удаляет левое меню для мобильных устройств(меню появляется снизу)
if ($(window).width() < 500) {
   $("#first_menu").remove()
}
function click_button(id_button){
  width = $('#plus_button').width();
  height = $('#plus_button').height();
  minus_width = width - 2;
  minus_height = height - 2;
  $(id_button).css({
    'width': minus_width,
    'height': minus_height,
    'box-shadow': '0px 0px 4px 0px blue'
  });
  setTimeout("$('"+id_button+"').css({width: '"+(minus_width + 2)+"','height': '"+(minus_height + 2)+"','box-shadow':'0px 0px 0px 0px white'})", 100);
}


function pushbtn()
{
  if ($(window).width() < 500) {
    click_button('#plus_button');
  }
  else {
    click_button('#plus_button');
  }
  currency = parseInt(check_img());
  score = parseInt($('#score').html());
  $('#score').html(score + currency);
}






















// Скорость клика юнитов
speed_click = 1000;
speed_click_bastshoes = speed_click;
speed_click_cats = speed_click;
// Прибавляемое число за 1 клик юнита
bastshoes_power = 0.5;

currency = parseInt($('#currency').html());
cats = parseInt($('#cats').html());
//Сохранения в игре
//setInterval(save,2000);


// + 1 рубль
$('#plus_button').click(pushbtn);
// Покупка лаптя
$('#plus_bastshoes_button').click(push_bastshoes);
$('#plus_bastshoes_button').click(counter);
// Покупка кота
$('#plus_cats_button').click(pushcat);
//Функция добавления котами монет
$('#plus_cats_button').click(counter);
//Улучшение рубля
$('#upgrade_plus').click(push_upgrade_plus);
//Улучшение здания
$('#upgrade_build').click(upgrade_build);

$(document).ready(function(){
 // Функция проверки прогресса
 // Включает счетчик
 counter();
 check_img();
 check_level_build();
 check_how_much_time_passed();
 add_score_for_time_passed();
 check_gif();
 //alert('Времени прошло: '+ time + 'минута ' + 'Очков накапало: '+ score_for_time);
});


function check_how_much_time_passed(){
  date_last_exit = $('#date_last_exit').html();
  moment_date_last_exit = moment(date_last_exit,'yyyy-mm-dd hh:mm');
  moment_time_now = moment();
  time_passed = moment_time_now.diff(moment_date_last_exit,'minutes');
  return time_passed;
}
function add_score_for_time_passed(){
  score_cash = parseInt($('#score_cash').html());
  how_much_time_passed = parseInt(check_how_much_time_passed());
  multiply = score_cash * how_much_time_passed;
  score = parseInt($('#score').html());
  $('#score').html(score + multiply);
  return multiply;
}

function check_level_build(){
  levelbuild = parseInt($('#levelbuild').html());
  if(levelbuild == 1){
    $('#div_plus_bastshoes_button').removeClass('d-none');
    $('#build').removeClass('d-none');
  }
}
function check_gif(){
  // Загрузка гивок при заходе на стр
  // bastshoes = parseInt($('count_bastshoes').html());
  check_bastshoes = parseInt($('count_bastshoes').html());
}
function check_img(){
  currency = $('#currency').html();
  if(currency > 4){
    $("#plus_button").removeClass("plus_button");
    if ($(window).width() < 500) {
      $("#plus_button").addClass("plus_button_more_fifty_less500");
    }
    else {
      $("#plus_button").addClass("plus_button_more_fifty");
    }
  }
  if(currency == 11){
    $("#plus_button").attr("src","/static/click/img/money/fivethousand.png");
    return 5000;
  }
  else if(currency == 10){
    $("#plus_button").attr("src","/static/click/img/money/twothousand.png");
    return 2000;
  }
  else if(currency == 9){
    $("#plus_button").attr("src","/static/click/img/money/thousand.png");
    return 1000;
  }
  else if(currency == 8){
    $("#plus_button").attr("src","/static/click/img/money/fivehundred.png");
    return 500;
  }
  else if(currency == 7){
    $("#plus_button").attr("src","/static/click/img/money/twohundred.png");
    return 200;
  }
  else if(currency == 6){
    $("#plus_button").attr("src","/static/click/img/money/onehundred.png");
    return 100;
  }
  else if(currency == 5){
    $("#plus_button").attr("src","/static/click/img/money/fifty.png");
    return 50;
  }
  else if(currency == 4){
    $("#plus_button").attr("src","/static/click/img/money/tenrub.png");
    return 10;
  }
  else if(currency == 3){
    $("#plus_button").attr("src","/static/click/img/money/fiverub.png");
    return 5;
  }
  else if(currency == 2){
    $("#plus_button").attr("src","/static/click/img/money/tworub.png");
    return 2;
  }
  else{
    $("#plus_button").attr("src","/static/click/img/money/onerub.png");
    return 1;
  }
}
function upgrade_build(){
  // Переменные для работы
  click_button = '#upgrade_build';
  price_id = '#price_upgrade_build';
  count_id = '#levelbuild';
  check('score');
  score = parseInt($('#score').html());
  $(click_button).css({'width': "78%"});
  setTimeout("$(click_button).css({width: '80%'})", 100);
  price = parseInt($(price_id).html());
  if (price <= score)
  {
    // Увеличиваем кол-во улучшений
    $('#score').html(score -= price);
    count = parseInt($(count_id).html());
    $(count_id).html(count + 1);
    // Отображаем купленное здание
    check_level_build()
    // Увеличиваем стоимость цены за следующее здание
    $(price_id).html(price + 5000);
    save();
  }
  else
  {
    $('#score').css({'color': "red"});
    setTimeout("$('#score').css({'color': 'black'})", 100);
  }
}

function push_bastshoes()
{
  // Переменные для работы
  click_button = '#plus_bastshoes_button';
  price_id = '#price_bastshoes';
  count = '#count_bastshoes';
  check('score');
  score = parseInt($('#score').html());
  // Анимация кнопки
  $(click_button).css({'width': "78%"});
  setTimeout("$(click_button).css({width: '80%'})", 100);
  price = parseInt($(price_id).html());
  if (price <= score)
  {
    // Увеличиваем кол-во улучшений
    $('#score').html(score -= price);
    upgrades = parseInt($(count).html());
    $(count).html(upgrades + 1);
    // Увеличиваем следующую цену за улучшение
    multiply = (price + 10) * 1.2;
    $(price_id).html(Math.round(multiply));
    // Увеличиваем кол-во за сек
    score_in_minute = parseInt($('#score_cash').html());
    $('#score_cash').html(score_in_minute + 30);
    // Показываем гифки с юнитами
    if((upgrades + 1) > 24){}
    else if((upgrades + 1) > 16){
      $('#bastshoes_secondlevel:last').remove();
      gif = $('#bastshoes_gif').html();
      img = '<img src="/static/click/img/bastshoes3.gif" class="unit" id="bastshoes_thirdlevel">';
      $('#bastshoes_gif').prepend(img);
    }
    else if((upgrades + 1) > 8){
      $('#bastshoes_firstlevel:last').remove();
      gif = $('#bastshoes_gif').html();
      img = '<img src="/static/click/img/bastshoes2.gif" class="unit" id="bastshoes_secondlevel">';
      $('#bastshoes_gif').prepend(img);
    }
    else{
      gif = $('#bastshoes_gif').html();
      img = '<img src="/static/click/img/bastshoes.gif" class="unit" id="bastshoes_firstlevel">';
      $('#bastshoes_gif').prepend(img);
    }

    // Обновляет информацию о счете в секунду
    check_score_in_second();
    // save();
  }
  else
  {
    $('#score').css({'color': "red"});
    setTimeout("$('#score').css({'color': 'black'})", 100);
  }
}


function pushcat()
{
  $('#plus_cats_button').css({'width': "78%"});
  setTimeout("$('#plus_cats_button').css({width: '80%'})", 100);
  score = parseInt($('#score').html());
  price_cats = parseInt($('#price_cats').html());
  if (price_cats <= score)
  {
    $('#score').html(score -= price_cats);
    cats = parseInt($('#cats').html());
    $('#cats').html(cats + 1);
    price_cats = parseInt($('#price_cats').html());
    multiply = (price_cats + 2) * 1.2;
    $('#price_cats').html(Math.round(multiply));
    // Обновляет информацию о счете в секунду
    // check_score_in_minute();
  }
  else
  {
    $('#score').css({'color': "red"});
    setTimeout("$('#score').css({'color': 'black'})", 100);
  }
}
function counter()
{
  bastshoes = parseInt($('#count_bastshoes').html());
  cats = parseInt($('#cats').html());
  if (bastshoes >= 1)
  {
    // удаляет предыдущие таймеры если они есть, чтобы не работали несколько таймеров одновременно
    try{
      clearInterval(counter_bastshoes);
    }
    catch(e){}
    return counter_bastshoes = setInterval(bastshoes_push,speed_click_bastshoes);
    function bastshoes_push(){
      score = parseFloat($('#score').text());
      $('#score').html(score + bastshoes_power * bastshoes);
    }
  }
  if (cats >= 1)
  {
    // удаляет предыдущие таймеры если они есть, чтобы не работали несколько таймеров одновременно
    try{
      clearInterval(var_counter_cats);
    }
    catch(e){}
    return var_counter_cats = setInterval(catspush,speed_click_cats);
    function catspush(){
      score = parseInt($('#score').html());
      $('#score').html(score + cats);
    }
  }
}
function push_upgrade_plus(){
  $('#upgrade_plus').css({'width': "78%"});
  setTimeout("$('#upgrade_plus').css({width: '80%'})", 100);
  check('score');
  score = parseInt($('#score').html());
  price_upgraide_currency = parseInt($('#price_upgraide_currency').html());
  check('currency');
  currency = parseInt($("#currency").html());
  if (price_upgraide_currency <= score)
  {
    $('#score').html(score -= price_upgraide_currency);
    $("#currency").html(currency + 1);
    multiply = (price_upgraide_currency + 100) * 3;
    $('#price_upgraide_currency').html(Math.round(multiply));
    save();
    check_img();
  }
  else
  {
    $('#score').css({'color': "red"});
    setTimeout("$('#score').css({'color': 'black'})", 100);
  }
}
// Сохранение прогресса

function check(value)
{
  $.ajax(
		{
			type: "GET",
			url: "/click/check/",
      async: false,
			data:
			{
        'user_id': $('#user_id').html(),
        // параметр провеки в бд
        'value': value,
			},
			dataType: "text",
			cache: false,
				success: function(data)
			{
        if(value == 'currency'){
          $('#currency').html(data);
        }
        if(value == 'score'){
          $('#score').html(parseInt(data));
        }
      }
		});
}

function save()
{
	$.ajax(
		{
			type: "GET",
			url: "/click/save/",
			data:
			{
				'score': $('#score').html(),
        'cats': $('#cats').html(),
        'bastshoes': $('#count_bastshoes').html(),
				'user_id': $('#user_id').html(),
        'cash': parseInt($('#score_cash').html()),
        'currency': $('#currency').html(),
        'levelbuild': $('#levelbuild').html(),
        'price_bastshoes': $('#price_bastshoes').html(),
        'price_cats': $('#price_cats').html(),
        'price_upgraide_currency': $('#price_upgraide_currency').html(),
        'price_levelbuild': $('#price_upgrade_build').html(),
			},
			dataType: "text",
			cache: false,
				success: function(data)
			{
			}
		});
}
